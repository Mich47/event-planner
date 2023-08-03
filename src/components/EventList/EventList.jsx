import { EventCard } from "../EventCard/EventCard";
import { List } from "./EventList.styled";

export const EventList = ({ events }) => {
  return (
    <List>
      {events.map((event) => (
        <li key={event.id}>
          <EventCard event={event} />
        </li>
      ))}
    </List>
  );
};
