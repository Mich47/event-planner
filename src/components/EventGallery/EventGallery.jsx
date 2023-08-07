import dateFormat from "dateformat";
import { BUTTON_SIZES } from "../../constants/ButtonSizes";
import { Button } from "../Button/Button";
import {
  Container,
  DescWrapper,
  Description,
  Image,
  ImageContainer,
  MarkWrapper,
  BtnContainer,
  Wrapper,
} from "./EventGallery.styled";

import defaultImg from "../../assets/images/default-img-l.svg";
import { Mark } from "../Mark/Mark";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../redux/events/events.operations";

export const EventGallery = ({ event }) => {
  const dispatch = useDispatch();

  const {
    id,
    title,
    description,
    date,
    time,
    location,
    category,
    picture,
    priority,
  } = event;

  const navigate = useNavigate();

  return (
    <Container>
      <ImageContainer>
        <Image src={picture ?? defaultImg} alt={title ?? "event"} />
      </ImageContainer>
      <Wrapper>
        <DescWrapper>
          <Description>{description}</Description>
          <MarkWrapper>
            <Mark text={category} />
            <Mark text={priority} />
            <Mark text={location} />
            <Mark
              text={`${dateFormat(date, "mm.yy")} at ${dateFormat(
                time,
                "hh:mm tt"
              )}`}
            />
          </MarkWrapper>
        </DescWrapper>
        <BtnContainer>
          <Button
            notAccent
            size={BUTTON_SIZES.small}
            title="Edit"
            onClick={() => {
              navigate("/edit", id);
            }}
          />
          <Button
            size={BUTTON_SIZES.small}
            title="Delete event"
            onClick={() => {
              dispatch(deleteEvent(id));
              navigate("/");
            }}
          />
        </BtnContainer>
      </Wrapper>
    </Container>
  );
};
