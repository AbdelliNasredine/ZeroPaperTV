import EventPanel from "./components/EventPanel";
import MapLink from "./components/MapLink";
import StatsPanel from "./components/StatsPanel";
import PlanningPanel from "./components/PlanningPanel";

import { AiOutlinePaperClip } from "react-icons/ai";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <div class="App--header">
        <AiOutlinePaperClip />
        <span>ZeroPaper Tv App</span>
      </div>
      <StatsPanel />
      <div className="row">
        <EventPanel />
        <PlanningPanel />
      </div>
      <MapLink />
    </div>
  );
}

export default App;
