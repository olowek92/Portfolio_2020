// MOBILE FIRST

import styled from "styled-components";

export const Main = styled.main`
  margin-top: 64px;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Div = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  color: white;

  @media (min-width: 768px) {
    width: 30%;
    margin-right: 150px;
  }
`;

export const H1 = styled.h2`
  text-transform: uppercase;
  display: none;

  @media (min-width: 321px) {
    display: block;
  }
`;

export const Paragraph = styled.p`
  margin-top: 30px;
  line-height: 25px;
`;