import { Header } from "./Header";
import { Container, MainStyled } from "./MainLayout.styled";

export default function MainLayout() {
  return (
    <Container>
      <Header />
      <MainStyled>
        <div></div>
      </MainStyled>
    </Container>
  );
}
