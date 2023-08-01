import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  width: 272px;

  @media (min-width: 768px) {
    width: 368px;
  }

  @media (min-width: 1280px) {
    width: 410px;
  }
`;

export const SearchWrapper = styled.div``;

export const Input = styled.input`
  width: 100%;
  padding: 12px 48px;
  color: var(--color-accent);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  border-radius: 8px;
  border: none;
  background: #fff;
  box-shadow: var(--shadow-primary);
  outline: none;

  &::placeholder {
    color: var(--text-color-placeholder);
    font-size: 14px;
    font-weight: 300;
    line-height: 100%;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  left: 12px;
  top: 8px;
  display: flex;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  color: var(--color-accent);
  transition: color var(--animation);

  &:hover {
    color: var(--color-accent-hover);
  }
`;
