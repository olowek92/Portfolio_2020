import React from "react";
import { useHistory } from 'react-router-dom';

import '../MobileMenu/MenuToggleButton';
import MenuToggleButton from "../MobileMenu/MenuToggleButton";

import { Header, Nav, DivLogo, Img, DivSpacer, Ul, Li, LinkItem, DivButton, DivNavUl } from "./Toolbar.elements";

const Toolbar = ({changeBackgroundImageOnContact, changeBackgroundImageOnHome, menuClickHandler, changeBackgroundImageHomeMobile, changeBackgroundImageNoneMobile, changeBackgroundImageNoneTablet, changeBackgroundImageHomeTablet}) => {
  const history = useHistory();
  const pathname = history.location.pathname;
  console.log(pathname);

  if (pathname === '/about') {
    changeBackgroundImageNoneMobile()
    changeBackgroundImageNoneTablet()
  } else if (pathname === '/projects') {
    changeBackgroundImageNoneMobile()
    changeBackgroundImageNoneTablet()
  } else if ( pathname === '/contact') {
    changeBackgroundImageNoneMobile()
    changeBackgroundImageNoneTablet()
    changeBackgroundImageOnContact()
  }

  const handleClickGoHome = () => {
    const location = {
      pathname: '/',
    };

    history.push(location);
    changeBackgroundImageOnHome();
  };

return (

  <>
    <Header>

      <Nav>

        <DivButton >
          <MenuToggleButton click={menuClickHandler}/>
        </DivButton>

        <DivLogo>
          <Img onClick={() => {
            changeBackgroundImageHomeMobile()
            changeBackgroundImageHomeTablet()
            handleClickGoHome()
          }}
          src="/images/Logo.png" alt="Logo"/>
        </DivLogo>

        <DivSpacer/>

        <DivNavUl>

          <Ul>
            <Li>
              <LinkItem onClick={changeBackgroundImageOnHome} to="about">o mnie</LinkItem>
            </Li>

            <Li>
              <LinkItem onClick={changeBackgroundImageOnHome} to="projects">projekty</LinkItem>
            </Li>

            <Li>
              <LinkItem onClick={changeBackgroundImageOnContact} to="contact">kontakt</LinkItem>
            </Li>
          </Ul>

        </DivNavUl>

      </Nav>

    </Header>

  </>
  )
};

export default Toolbar;