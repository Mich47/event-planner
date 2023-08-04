import { AddButton } from "../../components/AddButton/AddButton";
import { EventList } from "../../components/EventList/EventList";
import { PAGE_NAME } from "../../constants/PageName";
import { Container, SectionStyled, TitleStyled, Wrapper } from "./Home.styled";

const events = [
  {
    id: 1,
    title: "title",
    description: "description",
    date: "date",
    time: "time",
    location: "location",
    category: "category",
    // picture: "picture",
    priority: "priority",
  },
  {
    id: 2,
    title: "title",
    description: "description",
    date: "date",
    time: "time",
    location: "location",
    category: "category",
    // picture: "picture",
    priority: "priority",
  },
  {
    id: 3,
    title: "title",
    description: "description",
    date: "date",
    time: "time",
    location: "location",
    category: "category",
    // picture: "picture",
    priority: "priority",
  },
  {
    id: 4,
    title: "title",
    description: "description",
    date: "date",
    time: "time",
    location: "location",
    category: "category",
    // picture: "picture",
    priority: "priority",
  },
  {
    id: 5,
    title: "title",
    description: "description",
    date: "date",
    time: "time",
    location: "location",
    category: "category",
    // picture: "picture",
    priority: "priority",
  },
];

export default function Home() {
  return (
    <SectionStyled>
      <Container>
        <Wrapper>
          <TitleStyled>{PAGE_NAME.home}</TitleStyled>
        </Wrapper>
        <AddButton />
      </Container>

      <EventList events={events} />
    </SectionStyled>
  );
}
