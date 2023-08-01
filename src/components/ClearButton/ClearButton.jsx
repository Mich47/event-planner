import { Button, Svg } from "./ClearButton.styled";
import icons from "../../assets/images/icons.svg";

export const ClearButton = () => {
  return (
    <Button type="button">
      <Svg>
        <use href={`${icons}#icon-cross`} />
      </Svg>
    </Button>
  );
};
