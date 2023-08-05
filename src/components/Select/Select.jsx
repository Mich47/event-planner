import { useRef, useState } from "react";
import { useClickAway, useKeyPressEvent } from "react-use";
import {
  ButtonWrapper,
  Container,
  InputStyled,
  LabelStyled,
  SelectItem,
  SelectList,
  Wrapper,
} from "./Select.styled";
import { IconButton } from "../IconButton/IconButton";

import icons from "../../assets/images/icons.svg";

export const Select = ({
  name = "select",
  labelText = "",
  valuesArray = [""],
  selectValue = "",
}) => {
  const [inputValue, setInputValue] = useState(selectValue || valuesArray[0]);
  const buttonRef = useRef();
  const selectRef = useRef();
  const [isSelectListVisible, setIsSelectListVisible] = useState(false);

  const icon = `${icons}#icon-chevron-down`;

  const buttonRotate = () => {
    buttonRef.current.classList.toggle("rotate180deg");
  };

  useKeyPressEvent("Escape", () => {
    setIsSelectListVisible(false);
    buttonRef.current.classList.remove("rotate180deg");
  });

  useClickAway(selectRef, () => {
    setIsSelectListVisible(false);
    buttonRef.current.classList.remove("rotate180deg");
  });

  return (
    <Container ref={selectRef}>
      <Wrapper>
        <LabelStyled htmlFor={name}>{labelText}</LabelStyled>
        <InputStyled
          type="text"
          name={name}
          id={name}
          readOnly
          value={inputValue}
          placeholder="Select"
          onChange={(event) => {
            const { value } = event.target;
            setInputValue(value);
          }}
          onClick={() => {
            buttonRotate();
            setIsSelectListVisible(!isSelectListVisible);
          }}
        />
        <ButtonWrapper ref={buttonRef}>
          <IconButton
            iconSvg={icon}
            onClick={() => {
              buttonRotate();
              setIsSelectListVisible(!isSelectListVisible);
            }}
          />
        </ButtonWrapper>
      </Wrapper>
      {isSelectListVisible && (
        <SelectList>
          {valuesArray.map((value) => (
            <SelectItem
              key={value}
              onClick={(event) => {
                setInputValue(event.target.textContent);
                setIsSelectListVisible(false);
                buttonRotate();
              }}
            >
              {value}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </Container>
  );
};
