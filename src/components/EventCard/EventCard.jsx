import { BUTTON_SIZES } from "../../constants/ButtonSizes";
import { Button } from "../Button/Button";
import {
  Container,
  DataTimeContainer,
  DataTimeText,
  DescContainer,
  Description,
  Image,
  ImageContainer,
  MoreInfoContainer,
  Title,
  Wrapper,
} from "./EventCard.styled";

import defaultImg from "../../assets/images/default-img-s.svg";
import { useState } from "react";

export const EventCard = () => {
  const [isMouseOver, setIsMouseOver] = useState(0);
  return (
    <Container
      onMouseOver={() => {
        setIsMouseOver(1);
      }}
      onMouseLeave={() => {
        setIsMouseOver(0);
      }}
    >
      <ImageContainer>
        <Image src={defaultImg} alt="Event name" />
      </ImageContainer>
      <DescContainer $isMouseOver={isMouseOver}>
        <DataTimeContainer>
          <DataTimeText>12.07 at 12:00</DataTimeText>
          <DataTimeText>Kyiv</DataTimeText>
        </DataTimeContainer>
        <Wrapper>
          <Title>Title</Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
            ducimus rem nostrum eligendi ipsam tempora fugiat culpa repellat
            saepe, quaerat delectus est mollitia beatae aut! Ipsum doloribus
            necessitatibus maxime similique.
          </Description>
          <MoreInfoContainer>
            <Button size={BUTTON_SIZES.medium} title="More info" />
          </MoreInfoContainer>
        </Wrapper>
      </DescContainer>
    </Container>
  );
};
