function questions (state = [], action) {
    switch (action.type) {
        case 'ADD_QUESTION' :
            return [
                ...state,
                {
                    text: action.text,
                    asked: false,
                }
            ]
        case 'TOGGLE_QUESTION' :
            return state.map((question, index) => {
                if (index === action.index) {
                    return Object.assign({}, question, {
                        asked: !question.asked,
                    })
                }
                return question;
            })
        default:
            return state;
        }
}

export default questions;