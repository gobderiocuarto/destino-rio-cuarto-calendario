import React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};
