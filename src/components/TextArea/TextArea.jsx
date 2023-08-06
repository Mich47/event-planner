import { useState } from "react";
import { ClearButton } from "../ClearButton/ClearButton";
import {
  ClearButtonWrapper,
  Container,
  ErrorText,
  InputStyled,
  LabelStyled,
  Wrapper,
} from "./TextArea.styled";
import { INPUT_STATES } from "../../constants/InputStates";

export const TextArea = ({ error, labelText = "", name = "" }) => {
  const [inputValue, setInputValue] = useState("");

  const [clearBtnState, setClearBtnState] = useState(INPUT_STATES.default);

  const isError = Boolean(error);

  const getBtnState = (value) => {
    const isValue = Boolean(value);
    console.log("isValue ", isValue);
    console.log("isError ", isError);

    if (isValue) {
      return INPUT_STATES.filled;
    }

    if (isError) {
      return INPUT_STATES.error;
    }

    return INPUT_STATES.default;
  };

  return (
    <Container>
      <Wrapper>
        <LabelStyled htmlFor={name}>{labelText}</LabelStyled>
        <InputStyled
          type="text"
          name={name}
          id={name}
          value={inputValue}
          placeholder="Input"
          onChange={(event) => {
            const { value } = event.target;
            setInputValue(value);
            setClearBtnState(getBtnState(value));
          }}
          // onMouseMove={() => setClearBtnState(INPUT_STATES.hover)}
          onMouseLeave={(event) => {
            const { value } = event.target;
            setClearBtnState(getBtnState(value));
          }}
        />
        <ClearButtonWrapper>
          <ClearButton
            inputState={clearBtnState}
            onClick={() => {
              setInputValue("");
            }}
          />
        </ClearButtonWrapper>
      </Wrapper>
      {<ErrorText>{isError && "Invalid input"}</ErrorText>}
    </Container>
  );
};
