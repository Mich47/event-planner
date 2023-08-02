import icons from "../../assets/images/icons.svg";
import { LinkStyled, Span, Svg } from "./BackButton.styled";

export const BackButton = () => {
  return (
    <LinkStyled to={"/"}>
      <Svg>
        <use href={`${icons}#icon-arrow-left`} />
      </Svg>
      <Span>Back</Span>
    </LinkStyled>
  );
};
