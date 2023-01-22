import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addQuestionToUser, addAnswerToUser } from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION_TO_QUESTIONS = 'ADD_QUESTION_TO_QUESTIONS';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

export function addQuestionToQuestions(question) {
    return {
        type: ADD_QUESTION_TO_QUESTIONS,
        question,
    };
}

export function addAnswerToQuestions(authedUser,qid, answer) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        authedUser,
        qid,
        answer,
    };
}


export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        const question = {
            'optionOneText': optionOneText,
            'optionTwoText':optionTwoText,
            'author': authedUser
        }

        dispatch(showLoading());
            return saveQuestion(question)
            .then( (question) => {
                dispatch(addQuestionToQuestions(question))
                dispatch(addQuestionToUser(authedUser, question.id))
                dispatch(hideLoading());
            })
    }
}

export function handleAddAnswerToQuestion( authedUser, qid, answer) {
    console.log('authedUser, qid, answer', authedUser, qid, answer)
    return(dispatch, getState) => {
        return saveQuestionAnswer( authedUser, qid, answer)
        .then( () => {
            dispatch(addAnswerToQuestions( authedUser, qid, answer ))
            dispatch(addAnswerToUser( authedUser, qid, answer ))
        })
    }
}

