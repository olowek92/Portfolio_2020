import React from 'react';

import { Button, DivLine } from "./MenuToggleButton.elements";

const MenuToggleButton = props => {
    return (
        <Button onClick={props.click}>
            <DivLine></DivLine>
            <DivLine></DivLine>
            <DivLine></DivLine>
        </Button>
    );

}

export default MenuToggleButton;