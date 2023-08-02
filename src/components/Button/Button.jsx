import { BUTTON_SIZES } from "../../constants/ButtonSizes";
import {
  ButtonStyled,
  ButtonStyledNotAccent,
  Span,
  SpanNotAccent,
} from "./Button.styled";

export const Button = ({
  title = "Save",
  size = BUTTON_SIZES.small,
  notAccent,
}) => {
  return (
    <>
      {notAccent ? (
        <ButtonStyledNotAccent type="button">
          <SpanNotAccent>{title}</SpanNotAccent>
        </ButtonStyledNotAccent>
      ) : (
        <ButtonStyled type="button" size={size}>
          <Span size={size}>{title}</Span>
        </ButtonStyled>
      )}
    </>
  );
};
