import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addAnswerToUser, addQuestionToUser } from "./users";

import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function receiveAnswerQuestion(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_QUESTION,
        authedUser,
        qid,
        answer,
    }
}

export function handdleAddQuestion(option1, option2, authedUser){
    return (dispatch, getState) => {
        dispatch(showLoading());
        const question = {};
        question['optionOneText'] = option1;
        question['optionTwoText'] = option2;
        question['author'] = authedUser.id;

        return saveQuestion(question)
        .then( (question) => dispatch(addQuestion(question)))
        
        .then( () => dispatch(hideLoading()))
    }
}

export function handdleAnswerToQuestion(authedUser, qid, answer) {
    console.log('AUTHEDUSE IN action pollQuestion', authedUser)
    return (dispatch, getState) => {

        const questions = getState()
        dispatch(showLoading());

        return saveQuestionAnswer(authedUser.id, qid, answer)
        .then( () => {
            dispatch(receiveAnswerQuestion(authedUser.id, qid, answer))
            dispatch(addAnswerToUser(authedUser.id, qid, answer))
            dispatch(receiveQuestions(questions))
        })
        
        .then( () => dispatch(hideLoading()))
        .then(console.log('2 AUTHEDUSE IN action pollQuestion', authedUser, questions))
    }

}