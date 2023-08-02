import { useLocation } from "react-router-dom";
import { TitleStyled, Wrapper } from "./SectionTitle.styled";
import { PAGE_NAME } from "../../constants/PageName";

export const SectionTitle = () => {
  const location = useLocation();
  const title = PAGE_NAME[location.pathname.slice(1)];

  return (
    <Wrapper>
      <TitleStyled>{title ?? "No title"}</TitleStyled>
    </Wrapper>
  );
};
