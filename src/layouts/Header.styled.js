import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: var(--background-color-secondary);
  border-bottom: 1px solid var(--color-accent);
`;

export const HeaderContainer = styled.div`
  min-width: 320px;
  padding: 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 768px;
    padding: 26px 40px 18px 40px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 22px 80px;
  }
`;
