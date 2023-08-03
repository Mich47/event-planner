import { Container, Text } from "./Mark.styled";

export const Mark = ({ color, text, $fontWidth }) => {
  return (
    <Container color={color}>
      <Text $fontWidth={$fontWidth}>{text}</Text>
    </Container>
  );
};
