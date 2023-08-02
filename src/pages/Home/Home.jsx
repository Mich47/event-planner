import { AddButton } from "../../components/AddButton/AddButton";
import { PAGE_NAME } from "../../constants/PageName";
import { Container, SectionStyled, TitleStyled, Wrapper } from "./Home.styled";

export default function Home() {
  return (
    <SectionStyled>
      <Container>
        <Wrapper>
          <TitleStyled>{PAGE_NAME.home}</TitleStyled>
        </Wrapper>
        <AddButton />
      </Container>
      <div>Event List</div>
    </SectionStyled>
  );
}
