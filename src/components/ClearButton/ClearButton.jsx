import { ButtonStyled, Svg } from "./ClearButton.styled";
import icons from "../../assets/images/icons.svg";

export const ClearButton = () => {
  return (
    <ButtonStyled type="button">
      <Svg>
        <use href={`${icons}#icon-cross`} />
      </Svg>
    </ButtonStyled>
  );
};
