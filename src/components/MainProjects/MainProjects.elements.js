// MOBILE FIRST

import styled from "styled-components";

export const Main = styled.main`
  margin-top: 64px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 40%;
  margin-left: 0;
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;

  @media (min-width: 321px) {
    width: 50%;
    margin-bottom: 50px;
  }

  @media (min-width: 768px) {
    width: 40%;
    margin-left: 170px;
  }

  @media (min-width: 930px) {
    width: 35%;
    margin-left: 220px;
  }

  @media (min-width: 1020px) {
    width: 30%;
    margin-left: 280px;
  }

  @media (min-width: 1130px) {
    width: 25%;
    margin-left: 350px;
  }

  @media (min-width: 1280px) {
    margin-left: 400px;
  }

  @media (min-width: 1360px) {
    margin-left: 430px;
  }

  @media (min-width: 1450px) {
    margin-left: 500px;
  }

  @media (min-width: 1725px) {
    margin-left: 600px;
  }

  @media (min-width: 2040px) {
    margin-left: 700px;
  }
`;

export const Footer = styled.footer`
  width: 50%;
  color: grey;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;

  @media (min-width: 768px) {
    width: 40%;
    left: 170px;
    transform: none;
  }

  @media (min-width: 930px) {
    width: 35%;
    left: 220px;
  }

  @media (min-width: 1020px) {
    width: 30%;
    left: 280px;
  }

  @media (min-width: 1130px) {
    width: 25%;
    left: 350px;
  }

  @media (min-width: 1280px) {
    left: 400px;
  }

  @media (min-width: 1360px) {
    left: 430px;
  }

  @media (min-width: 1450px) {
    left: 500px;
  }

  @media (min-width: 1725px) {
    left: 600px;
  }

  @media (min-width: 2040px) {
    left: 700px;
  }
`;

export const Paragraph = styled.p``;
