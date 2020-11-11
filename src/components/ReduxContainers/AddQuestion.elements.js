// MOBILE FIRST

import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 50%;
  padding: 10px;
  outline: 0 none transparent;
  resize: none;
  background: transparent;
  border: none;
  color: white;
  flex-grow: 1;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-bottom: 1px solid rgb(211,211,211, 0.3);

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  width: 50%;
  height: 40px;
  background: transparent;
  border: 5px solid #007e7a;
  color: white;
  font-family: 'Roboto', sans-serif;
  outline: 0 none transparent;
  cursor: pointer;
`;

