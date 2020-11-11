import React from 'react';
import PropTypes from 'prop-types';

import { Li } from './Question.elements';

const Question = ({onClick, asked, text}) => (
    <Li 
    onClick={onClick}
    asked={asked}
    >
    {text}
    </Li>
);

Question.propTypes = {
    onClick: PropTypes.func.isRequired,
    asked: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Question;