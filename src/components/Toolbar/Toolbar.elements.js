// MOBILE FIRST

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

export const DivLogo = styled.div`
  margin-left: 1rem;
`;

export const Img = styled.img`
  position: absolute;
  top: 30%;
  left: 5%;
  cursor: pointer;
`;

export const DivSpacer = styled.div`
  flex: 1;
`;

export const DivNavUl = styled.div`
  display: none;

  @media (min-width: 1025px) {
    display: block;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Li = styled.li`
  padding: 0 0.5rem;
`;

export const LinkItem = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  padding-right: 70px;

&:hover {
  color: #007e7a;
}

&:active {
  color: #007e7a;
}
`;

export const DivButton = styled.div`
  position: absolute;
  top: 30%;
  right: 5%;

  @media (min-width: 1025px) {
    display: none;
  }
`;