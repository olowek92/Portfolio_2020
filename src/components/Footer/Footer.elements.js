// MOBILE FIRST

import styled from "styled-components";

export const Div = styled.div`
  padding: 25px 50px;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const Hyperlink = styled.a`
  margin: 0 1rem;
  transition: transform 250ms;
  color: white;

  &:hover {
    transform: translateY(-2px);
  }
`;