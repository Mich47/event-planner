import { useState } from "react";
import { ClearButton } from "../ClearButton/ClearButton";
import {
  ClearButtonWrapper,
  Container,
  ErrorText,
  InputStyled,
  LabelStyled,
  Wrapper,
} from "./Input.styled";
import { INPUT_STATES } from "../../constants/InputStates";

export const Input = ({ labelText = "", disabled, error, name = "" }) => {
  console.log("disabled ", disabled);
  const [inputValue, setInputValue] = useState("");
  // const [isDisabled, setIsDisabled] = useState(Boolean(disabled));
  // console.log("isDisabled ", isDisabled);
  // const [inputState, setInputState] = useState(INPUT_STATES.default);
  const [clearBtnState, setClearBtnState] = useState(INPUT_STATES.default);
  // const [isClearBtnState, setIsClearBtnState] = useState(false);

  const isError = Boolean(error);

  // const getBtnState = (isValue, isError) => {
  //   if (isValue) {
  //     return INPUT_STATES.filled;
  //   }
  //   if (isError) {
  //     return INPUT_STATES.error;
  //   }

  //   return INPUT_STATES.default;
  // };

  return (
    <Container>
      <Wrapper>
        <LabelStyled htmlFor="value" disabled={disabled}>
          {labelText}
        </LabelStyled>
        <InputStyled
          type="text"
          name="value"
          id="value"
          value={inputValue}
          disabled={disabled}
          placeholder="Input"
          $isError={isError}
          onChange={(event) => {
            const { value } = event.target;
            setInputValue(value);
            setClearBtnState(value ? INPUT_STATES.hover : INPUT_STATES.default);
          }}
          onMouseMove={() => setClearBtnState(INPUT_STATES.hover)}
          onMouseLeave={(event) => {
            const { value } = event.target;
            setClearBtnState(value ? INPUT_STATES.hover : INPUT_STATES.default);
          }}
        />
        <ClearButtonWrapper>
          <ClearButton
            inputState={clearBtnState}
            disabled={disabled}
            isError={isError}
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
