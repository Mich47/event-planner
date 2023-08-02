import { ButtonStyled, Span, Svg } from "./AddButton.styled";
import icons from "../../assets/images/icons.svg";

export const AddButton = () => {
  return (
    <ButtonStyled type="button">
      <Svg>
        <use href={`${icons}#icon-plus`} />
      </Svg>
      <Span>Add new event</Span>
    </ButtonStyled>
  );
};
