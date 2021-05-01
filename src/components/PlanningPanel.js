import { Panel } from "./Panel";
import { GoCalendar } from "react-icons/go";

export default function EventPanel() {
  return (
    <div className="col">
      <Panel title="Planning" icon={<GoCalendar />} fixed={false}></Panel>
    </div>
  );
}
