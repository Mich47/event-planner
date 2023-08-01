import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  right: 12px;
  top: 8px;
  display: flex;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  color: ${({ error }) =>
    error ? "var( --color-hight)" : "var(--color-accent)"};
  transition: color var(--animation);

  &:hover {
    color: ${({ error }) =>
      error ? "var( --color-hight-hover)" : "var(--color-accent-hover)"};
  }
`;
