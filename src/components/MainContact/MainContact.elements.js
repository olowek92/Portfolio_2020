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
  margin-left: 50px;

  @media (min-width: 321px) {
    margin-top: 100px;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const Form = styled.form``;

export const Label = styled.label``;

export const DivName = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ImgFullArrow = styled.img``;

export const ImgBlankArrow = styled.img``;

export const Input = styled.input`
  outline: 0 none transparent;
  resize: none;
  background: transparent;
  border: none;
  color: white;
  flex-grow: 1;
  margin-left: 15px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`;

export const Span = styled.span`
  font-size: 12px;
  color: red;
  height: 10px;
  width: 100%;
  display: block;
`;

export const DivEmail = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const DivQuestion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  position: relative;
  margin-bottom: 10px;
`;

export const Textarea = styled.textarea`
  outline: 0 none transparent;
  resize: none;
  background: transparent;
  border: none;
  color: white;
  flex-grow: 1;
  margin-left: 15px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  position: absolute;
  top: 12px;
  left: 58px;
`;

export const DivButton = styled.div`
  width: 40%;
  margin-top: 30px;
  display: flex;
  margin-bottom: 10px;

  @media (min-width: 400px) {
    margin-top: 100px;
  }
`;

export const Button = styled.button`
  outline: 0 none transparent;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
  margin-left: 15px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
`;