import { useRef, useState } from "react";
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

export const Input = ({
  labelText = "",
  disabled,
  error,
  name = "",

  ...restProps
}) => {
  const [inputValue, setInputValue] = useState("");
  const [clearBtnState, setClearBtnState] = useState(INPUT_STATES.default);
  const inputRef = useRef();

  const isDisabled = Boolean(disabled);
  const isError = Boolean(error);

  const getBtnState = (value) => {
    const isValue = Boolean(value);
    console.log("isValue ", isValue);
    console.log("isDisabled ", isDisabled);
    console.log("isError ", isError);

    if (isValue) {
      return INPUT_STATES.filled;
    }

    if (isError) {
      return INPUT_STATES.error;
    }

    if (isDisabled) {
      return INPUT_STATES.disabled;
    }

    return INPUT_STATES.default;
  };

  return (
    <Container>
      <Wrapper>
        <LabelStyled htmlFor={name} disabled={disabled}>
          {labelText}
        </LabelStyled>
        <InputStyled
          ref={inputRef}
          type="text"
          {...restProps}
          name={name}
          id={name}
          value={inputValue}
          disabled={isDisabled}
          placeholder="Input"
          $isError={isError}
          onClick={(event) => {
            console.log("event ", event);
          }}
          onChange={(event) => {
            const { value } = event.target;
            setInputValue(value);
            setClearBtnState(getBtnState(value));
          }}
          // onMouseMove={() => setClearBtnState(getBtnState("value"))}
          onMouseLeave={(event) => {
            const { value } = event.target;
            setClearBtnState(getBtnState(value));
          }}
        />
        <ClearButtonWrapper>
          <ClearButton
            disabled={disabled}
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
