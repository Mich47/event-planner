import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 240px;

  @media (min-width: 768px) {
    width: 308px;
  }

  @media (min-width: 1280px) {
    width: 372px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelStyled = styled.label`
  color: var(--color-accent);
  font-size: 16px;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: 0.4px;
`;
export const InputStyled = styled.input`
  width: 100%;
  padding: 16px 48px 16px 12px;
  background-color: transparent;
  color: var(--text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $isError }) =>
    $isError ? "var(--color-hight)" : "var(--color-divider)"};
  /* background: #fff; */
  outline: none;
  transition: border-color var(--animation);

  &:hover {
    border-color: ${({ $isError }) =>
      $isError ? "var(--color-hight-hover)" : "var(--color-accent)"};
  }

  &::placeholder {
    color: var(--color-divider);
    font-size: 16px;

    font-weight: 400;
    line-height: 24px;
  }
`;

export const ClearButtonWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 37px;
`;

export const ErrorText = styled.p`
  align-self: flex-end;
  max-width: 100%;
  color: var(--color-hight);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  height: 16px;
`;
