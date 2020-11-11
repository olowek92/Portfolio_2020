import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Div, Hyperlink } from "./Footer.elements";

import {
    faFacebook,
    faTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const FacebookUrl = "https://www.facebook.com/woj.tek.142035";
const TwitterUrl = "https://twitter.com/Crayon234";
const LinkedInUrl = "https://www.linkedin.com/in/wojciech-ołownia/";

const Footer = () => {
    return ( 
        <>
            <Div>
                <Hyperlink href={FacebookUrl} target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size="2x"/> 
                </Hyperlink>
                <Hyperlink href={TwitterUrl} target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="2x"/>
                </Hyperlink>
                <Hyperlink href={LinkedInUrl} target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </Hyperlink>
            </Div>
        </>
     );
}
 
export default Footer;