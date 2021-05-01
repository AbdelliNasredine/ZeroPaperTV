import { useState } from "react";
import { Panel } from "./Panel";
import { GoGraph } from "react-icons/go";

export default function StatsPanel() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const dateIntervalTimer = setInterval(
    () => setCurrentTime(new Date().toLocaleTimeString()),
    1000
  );
  return (
    <Panel title="Stats" icon={<GoGraph />} time>
      <div className="row">
        <div className="col">
          <h1 style={{ textAlign: "center" }}>{currentTime}</h1>
        </div>
      </div>
    </Panel>
  );
}
