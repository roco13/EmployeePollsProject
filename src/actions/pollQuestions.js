import { saveQuestion} from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function receiveQuestions(questions) {
    console.log("inside action questions")
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function handdleAddQuestion(option1, option2, authedUser){
    return (dispatch, getState) => {
        //const {authedUser } = getState;
        console.log("authed USER ", authedUser)
        dispatch(showLoading());
        const question = {};
        question['optionOneText'] = option1;
        question['optionTwoText'] = option2;
        question['author'] = authedUser.id;
        console.log("QUESTION", question) 

        return saveQuestion(question)
        .then( (question) => dispatch(addQuestion(question)))
        .then( () => dispatch(hideLoading()))
    }
}