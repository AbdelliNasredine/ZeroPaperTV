import { Panel } from "./Panel";
import { GoBell } from "react-icons/go";

// Testing data
const EVENTS_LIST = [
  {
    name: "Event Name 1",
    description: "lorem ipsum",
    date: new Date(),
  },
  {
    name: "Event Name 2",
    description: "lorem ipsum",
    date: new Date(),
  },
  {
    name: "Event Name 3",
    description: "lorem ipsum",
    date: new Date(),
  },
  {
    name: "Event Name 4",
    description: "lorem ipsum",
    date: new Date(),
  },
];

function Event({ name, description, date }) {
  return (
    <div className="Event">
      <h3>{name}</h3>
      <span className="date">{date.toISOString()}</span>
    </div>
  );
}

export default function EventPanel() {
  return (
    <div className="col">
      <Panel title="Events" icon={<GoBell />} fixed={false}>
        {EVENTS_LIST.map((event, i) => (
          <Event
            name={event.name}
            description={event.description}
            date={event.date}
          />
        ))}
      </Panel>
    </div>
  );
}
