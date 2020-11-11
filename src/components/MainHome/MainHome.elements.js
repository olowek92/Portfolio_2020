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
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 100px;
  margin-left: 50px;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const Img = styled.img`
    width: 140%;
    margin-top: 50px;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const Paragraph = styled.p`
  margin-top: 30px;
`;

export const Button = styled.button`
  outline: 0 none transparent;
  margin-top: 50px;
  width: 150px;
  height: 40px;
  background: transparent;
  border: 5px solid #007e7a;
  color: white;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;