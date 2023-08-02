import { AddButton } from "../components/AddButton/AddButton";
import { Button } from "../components/Button/Button";
import { Header } from "./Header";
import { Container, MainStyled } from "./MainLayout.styled";

export default function MainLayout() {
  return (
    <Container>
      <Header />
      <MainStyled>
        <div>
          <AddButton />
          <Button title="Hello" accent />
        </div>
      </MainStyled>
    </Container>
  );
}
