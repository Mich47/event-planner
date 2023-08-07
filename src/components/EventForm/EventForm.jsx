import { useState } from "react";
import { BUTTON_SIZES } from "../../constants/ButtonSizes";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { SelectDateTime } from "../SelectDateTime/SelectDateTime";
import { TextArea } from "../TextArea/TextArea";
import { FormStyled } from "./EventForm.styled";
import { LOCATION_REGEX, TITLE_REGEX } from "../../constants/validateRegex";
import { CATEGORIES } from "../../constants/categories";
import { PRIORITIES } from "../../constants/priorities";
import { useDispatch } from "react-redux";
import { postEvent, putEvent } from "../../redux/events/events.operations";
import { useNavigate } from "react-router-dom";

export const EventForm = ({ event }) => {
  console.log("event ", event);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isNewEvent = !Boolean(event);

  const [title, setTitle] = useState(event?.title ?? "");
  const [location, setLocation] = useState(event?.location ?? "");
  const [category, setCategory] = useState(event?.category ?? "");
  const [priority, setPriority] = useState(event?.priority ?? "");
  const [date, setDate] = useState(event?.date ?? "");
  const [time, setTime] = useState(event?.time ?? "");
  const [description, setDescription] = useState(event?.description ?? "");
  const [picture, setPicture] = useState(event?.picture ?? "");

  const handleSubmit = async (evn) => {
    evn.preventDefault();
    const formData = {
      title,
      location,
      category,
      priority,
      date,
      time,
      description,
      picture,
    };
    console.log("formData ", formData);

    try {
      if (isNewEvent) {
        await dispatch(postEvent(formData)).unwrap();
        navigate("/");
        return;
      }

      await dispatch(putEvent({ ...event, ...formData })).unwrap();
      navigate(`/event/${event.id}`);
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <div>
        <Input
          labelText="Title"
          name="title"
          value={title}
          getValueFn={setTitle}
          validateRegex={TITLE_REGEX}
          required
        />
        <TextArea
          labelText="Description"
          name="description"
          value={description}
          getValueFn={setDescription}
          required
        />
        <SelectDateTime
          labelText="Select date"
          name="date"
          type="date"
          value={date}
          getValueFn={setDate}
          required
        />
        <SelectDateTime
          labelText="Select time"
          name="time"
          type="time"
          value={time}
          getValueFn={setTime}
          required
        />
        <Input
          labelText="Location"
          value={location}
          getValueFn={setLocation}
          validateRegex={LOCATION_REGEX}
          required
        />
        <Select
          labelText="Category"
          name="category"
          value={category}
          getValueFn={setCategory}
          valuesArray={CATEGORIES}
        />
        <Input
          labelText="Add picture"
          value={picture}
          getValueFn={setPicture}
          disabled
        />
        <Select
          labelText="Priority"
          name="priority"
          value={priority}
          getValueFn={setPriority}
          valuesArray={PRIORITIES}
        />
      </div>
      <Button
        type="submit"
        title={isNewEvent ? "Add event" : "Save"}
        size={BUTTON_SIZES.large}
      />
    </FormStyled>
  );
};
