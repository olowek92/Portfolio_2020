import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Toolbar from "./components/Toolbar/Toolbar";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Backdrop from "./components/Backdrop/Backdrop";
import MainHome from "./components/MainHome/MainHome";
import MainAbout from "./components/MainAbout/MainAbout"
import MainProjects from "./components/MainProjects/MainProjects";
import MainContact from "./components/MainContact/MainContact";
import Footer from "./components/Footer/Footer";

import GlobalStyle from "./GlobalStyles";

// REDUX

import { createStore } from 'redux'; 
import QuestionApp from './reducers/QuestionApp';

import { Provider } from 'react-redux';

const store = createStore(QuestionApp);

// REDUX

const App = () => {

const homeImg = 'url(/images/bcg_all_back_with_person.png)';
const contactImg = 'url(/images/Kontakt.png)';
const homeImgMobile = 'url(/images/Telefon.png)';
const homeImgTablet = 'url(/images/Tablet.png)';

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [backgroundImage, setBackgroundImage] = useState(homeImg);
const [homeImageMobile, setHomeImageMobile] = useState(homeImgMobile);
const [homeImageTablet, setHomeImageTablet] = useState(homeImgTablet);

const changeBackgroundImageOnContact = () => {
  setBackgroundImage(contactImg);
}

const changeBackgroundImageOnHome = () => {
  setBackgroundImage(homeImg);
}

const changeBackgroundImageNoneMobile = () => {
  setHomeImageMobile('none');
}

const changeBackgroundImageHomeMobile = () => {
  setHomeImageMobile(homeImgMobile);
}

const changeBackgroundImageNoneTablet = () => {
  setHomeImageTablet('none');
}

const changeBackgroundImageHomeTablet = () => {
  setHomeImageTablet(homeImgTablet);
}

const menuToggleClickHandler = () => {
  setMobileMenuOpen(prevState => 
      !prevState.mobileMenuOpen
  )
}

const backdropClickHandler = () => {
  setMobileMenuOpen(false)
}

    let backdrop;

    if(mobileMenuOpen) {
      backdrop = <Backdrop click={backdropClickHandler}/>;
    }

    return (
      <>
        <Provider store={store}>          
          <Router basename={process.env.PUBLIC_URL}>
          <GlobalStyle 
          mobile={homeImageMobile}
          tablet={homeImageTablet}
          route={backgroundImage}
          />
            <Toolbar 
            menuClickHandler={menuToggleClickHandler} 
            changeBackgroundImageOnContact={changeBackgroundImageOnContact}
            changeBackgroundImageOnHome={changeBackgroundImageOnHome}
            changeBackgroundImageHomeMobile={changeBackgroundImageHomeMobile}
            changeBackgroundImageHomeTablet={changeBackgroundImageHomeTablet}
            changeBackgroundImageNoneMobile={changeBackgroundImageNoneMobile}
            changeBackgroundImageNoneTablet={changeBackgroundImageNoneTablet}
            />
            <MobileMenu 
            show={mobileMenuOpen} 
            click={backdropClickHandler}
            changeBackgroundImageNoneMobile={changeBackgroundImageNoneMobile}
            changeBackgroundImageNoneTablet={changeBackgroundImageNoneTablet}
            />
            {backdrop}

            <Switch>
              <Route 
              path="/" exact component={() => <MainHome 
              changeBackgroundImageOnContact={changeBackgroundImageOnContact}
              changeBackgroundImageNoneMobile={changeBackgroundImageNoneMobile}
              changeBackgroundImageNoneTablet={changeBackgroundImageNoneTablet}
              />}/>
              <Route path="/about" exact component={MainAbout}/>
              <Route path="/projects" exact component={MainProjects}/>
              <Route path="/contact" exact component={MainContact}/>
            </Switch>
            
            <Footer/>
          </Router>
        </Provider>
      </>
    );
  }


export default App;