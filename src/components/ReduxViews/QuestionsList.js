import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

import { Ul } from './QuestionsList.elements';

const QuestionsList = ({questions, onQuestionClick}) => (
    <Ul>
        {questions.map((question, index) => (
            <Question key={index} {...question} onClick={() => onQuestionClick(index)} />
        ))}
    </Ul>
);

QuestionsList.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            asked: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    onQuestionClick: PropTypes.func.isRequired,
};

export default QuestionsList;