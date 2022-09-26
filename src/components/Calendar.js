import { useCallback, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import Spinner from "./Spinner";

export default function Calendar(events) {
  const spinner = useRef(null);

  const toggleSpinner = useCallback(
    (state) => {
      if (spinner.current) {
        if (state) {
          spinner.current.classList.remove("d-none");
          // console.log("remove d-none");
        } else {
          spinner.current.classList.add("d-none");
          // console.log("add d-none");
        }
      }
    },
    [spinner]
  );

  const handleEventClick = (clickInfo) => {
    clickInfo.jsEvent.preventDefault();
    if (clickInfo.event.url) {
      window.open(clickInfo.event.url, "_blank");
    }
  };
  return (
    <>
      {/* <div ref={spinner} className="">
        <Spinner />
      </div> */}
      <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
        headerToolbar={{
          left: "dayGridMonth,timeGridWeek,timeGridDay",
          center: "title",
          right: "today prev,next",
        }}
        navLinks={true}
        editable={false}
        dayMaxEvents={false}
        eventClick={handleEventClick}
        locale={esLocale}
        height={"auto"}
        loading={(s) => toggleSpinner(s)}
        events={`https://admin.visitariocuarto.gob.ar/api/v1/events`}
      />
    </>
  );
}
