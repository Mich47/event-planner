import styled from "styled-components";
import backgroundImage from "../assets/images/background.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background-color-primary);
  background-repeat: no-repeat;
  background-image: url(${backgroundImage});
`;

export const MainStyled = styled.main`
  min-width: 320px;
  /* height: 100%; */
  padding: 40px 24px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    padding: 40px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 60px 80px;
  }
`;
