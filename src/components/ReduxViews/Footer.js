import React from 'react';
import FilterLink from '../ReduxContainers/FilterLink';

import { Div } from './Footer.elements';

const Footer = () => (
    <Div>
        <FilterLink filter="ALL_QUESTIONS">
            WSZYSTKIE
        </FilterLink>
        <FilterLink filter="UNASKED_QUESTIONS">
            NIEZADANE
        </FilterLink>
        <FilterLink filter="ASKED_QUESTIONS">
            ZADANE
        </FilterLink>
    </Div>
);

export default Footer;
