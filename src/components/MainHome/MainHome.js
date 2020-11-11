import React from 'react';
import { useHistory } from 'react-router-dom';

import { Main, Div, Img, Paragraph, Button } from "./MainHome.elements";

const MainHome = ({changeBackgroundImageOnContact, changeBackgroundImageNoneMobile, changeBackgroundImageNoneTablet}) => {
    const history = useHistory();

    const handleClickGoContact = () => {
      const location = {
        pathname: '/contact',
      };
    
      history.push(location);
      changeBackgroundImageOnContact();
    };

    return ( 
        <>
            <Main>
                <Div>
                    <Img src="/images/Name.png" alt="Name"/>
                    <Paragraph>web developer</Paragraph>
                    <Button onClick={() => {
                      handleClickGoContact()
                      changeBackgroundImageNoneMobile()
                      changeBackgroundImageNoneTablet()
                    }}
                    >zatrudnij mnie</Button>
                </Div>
            </Main>
        </>
     );
}
 
export default MainHome;