import { BUTTON_SIZES } from "../../constants/ButtonSizes";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
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
  return (
    <FormStyled>
      <div>
        <Input labelText="Title" />
        <Input labelText="Description" />
        <Input labelText="Select date" />
        <Input labelText="Select time" />
        <Input labelText="Location" />
        <Input labelText="Category" />
        <Select labelText="Category" name="category" valuesArray={categories} />
        <Input labelText="Add picture" disabled />
        <Select labelText="Priority" name="priority" valuesArray={priorities} />
      </div>
      <Button title="Add event" size={BUTTON_SIZES.large} />
    </FormStyled>
  );
};
