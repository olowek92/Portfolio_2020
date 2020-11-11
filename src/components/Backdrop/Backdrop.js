import React from 'react';

import { Div } from "./Backdrop.elements";

const Backdrop = props => {
    return (
        <Div onClick={props.click}></Div>
    )
}
 
export default Backdrop;