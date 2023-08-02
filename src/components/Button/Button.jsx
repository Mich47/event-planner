import { BUTTON_SIZES } from "../../constants/ButtonSizes";
import { ButtonStyled, Span } from "./Button.styled";

export const Button = ({
  title = "Save",
  size = BUTTON_SIZES.small,
  accent,
}) => {
  console.log("accent", accent);
  const isAccent = accent ? 1 : 0;
  return (
    <ButtonStyled type="button" size={size} isAccent={isAccent}>
      <Span size={size} isAccent={isAccent}>
        {title}
      </Span>
    </ButtonStyled>
  );
};
