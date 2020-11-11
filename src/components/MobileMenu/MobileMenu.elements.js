// MOBILE FIRST

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 100%;
  background: black;
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  background-image: url(/images/Backdrop.png);
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1025px) {
    display: none;
  }

  ${(props) => 
    props.className && css`
    transform: translateX(0);
  `}
`;

export const Ul = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Li = styled.li`
  margin: 0.5rem 0;
`;

export const Hyperlink = styled(Link)`
  color: #007e7a;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
`;