import React from 'react';

import { Nav, Ul, Li, Hyperlink} from "./MobileMenu.elements";

const MobileMenu = ( { show, click, changeBackgroundImageNoneMobile, changeBackgroundImageNoneTablet }) => {
    let menuClasses;
    
    if(show) {
        menuClasses = true;
    }

    return (
    <>
        <Nav className={menuClasses}>
            <Ul>

                <Li>

                    <Hyperlink to="about" onClick={() => {
                        click();
                        changeBackgroundImageNoneMobile();
                        changeBackgroundImageNoneTablet();
                    }}
                    >o mnie</Hyperlink>

                </Li>

                <Li>

                    <Hyperlink to="projects" onClick={() => {
                        click();
                        changeBackgroundImageNoneMobile();
                        changeBackgroundImageNoneTablet();
                    }}
                    >projekty</Hyperlink>

                </Li>

                <Li>

                    <Hyperlink to="contact" onClick={() => {
                        click();
                        changeBackgroundImageNoneMobile();
                        changeBackgroundImageNoneTablet();
                    }}
                    >kontakt</Hyperlink>

                </Li>

            </Ul>
        </Nav>
    </>
    )
};

export default MobileMenu;