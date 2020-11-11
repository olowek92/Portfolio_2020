import { connect } from 'react-redux';
import QuestionsList from '../ReduxViews/QuestionsList';
import { toggleQuestion } from '../../actions/actions';

const getVisibleQuestion = (questions, filter) => {
    switch (filter) {
        case 'ASKED_QUESTIONS':
            return questions.filter(q => q.asked);
        case 'UNASKED_QUESTIONS':
            return questions.filter(q => !q.asked);
        case 'ALL_QUESTIONS':
        default:
            return questions;
    }
};

const mapStateToProps = state => {
    return {
        questions: getVisibleQuestion(state.questions, state.visibilityFilter),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onQuestionClick: id => {
            dispatch(toggleQuestion(id));
        },
    };
};

const VisibleQuestionsList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionsList);

export default VisibleQuestionsList;