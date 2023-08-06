import { BUTTON_SIZES } from "../../constants/ButtonSizes";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { SelectDateTime } from "../SelectDateTime/SelectDateTime";
import { TextArea } from "../TextArea/TextArea";
import { FormStyled } from "./EventForm.styled";

const priorities = ["High", "Medium", "Low"];
const categories = [
  "art",
  "music",
  "business",
  "conference",
  "workshop",
  "party",
  "sport",
];

export const EventForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log("formData ", formData.entries());
    console.log("event ", event);
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <div>
        <Input labelText="Title" name="title" required />
        <TextArea labelText="Description" name="description" required />
        <SelectDateTime
          labelText="Select date"
          name="date"
          type="date"
          required
        />
        <SelectDateTime
          labelText="Select time"
          name="time"
          type="time"
          required
        />
        <Input labelText="Location" required />
        <Select labelText="Category" name="category" valuesArray={categories} />
        <Input labelText="Add picture" disabled />
        <Select labelText="Priority" name="priority" valuesArray={priorities} />
      </div>
      <Button type="submite" title="Add event" size={BUTTON_SIZES.large} />
    </FormStyled>
  );
};
