import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/pollQuestions";

export default function pollQuestions(state= {}, action) {
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case ADD_QUESTION:
            const {question} = action;
            return {
                ...state,
                [action.question.id] : action.question,
            }
        default:
            return state;
    }
}