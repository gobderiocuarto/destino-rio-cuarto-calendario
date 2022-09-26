import Calendar from "./components/Calendar";
import { Layout } from "./components/Layout";

import "./styles/app.scss";

function App() {
  return (
    <Layout>
      <main id="#calendar-container">
        <Calendar />
      </main>
    </Layout>
  );
}

export default App;
