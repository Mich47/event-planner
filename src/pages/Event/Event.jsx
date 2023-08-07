import { useParams } from "react-router-dom";
import { Section } from "../../components/Section/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../redux/events/events.operations";
import { useEffect } from "react";
import { selectCurrentEvent } from "../../redux/events/events.selectors";
import { EventGallery } from "../../components/EventGallery/EventGallery";

export default function Event() {
  const { id } = useParams();
  console.log("id ", id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  const event = useSelector(selectCurrentEvent);
  console.log("event ", event);

  console.log("params ", id);
  // console.log("id ", id);
  return (
    <Section>
      {event && (
        <>
          <SectionTitle>{event.title}</SectionTitle>
          <EventGallery event={event} />
        </>
      )}
    </Section>
  );
}
