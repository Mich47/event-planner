import {
  ClearButtonWrapper,
  Container,
  Form,
  Input,
  SearchWrapper,
  SubmitButton,
  Svg,
} from "./Search.styled";
import icons from "../../assets/images/icons.svg";
import { ClearButton } from "../ClearButton/ClearButton";

export const Search = () => {
  return (
    <Container>
      <Form method="submit">
        <SearchWrapper>
          <label htmlFor="search" className="visually-hidden">
            Search by keywords
          </label>
          <Input
            type="text"
            id="search"
            name="search"
            placeholder="Search by keywords"
          />
        </SearchWrapper>
        <SubmitButton type="submit">
          <Svg>
            <use href={`${icons}#icon-search`} />
          </Svg>
        </SubmitButton>

        <ClearButtonWrapper>
          <ClearButton />
        </ClearButtonWrapper>
      </Form>
    </Container>
  );
};
