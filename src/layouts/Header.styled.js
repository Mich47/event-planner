import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 23px 0;
  background-color: var(--background-color-secondary);
  border-bottom: 1px solid var(--color-accent);
`;

export const HeaderContainer = styled.div`
  min-width: 320px;
  padding: 24px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
