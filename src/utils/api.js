import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
    /* .then(([users, questions]) => {
      console.log("users",users)
      console.log("questions",questions)
      return {
        users,
       questions,
      }
    }) */
  }
  
  export function saveQuestion (info) {
    return _saveQuestion(info)
  }
  
  export function saveQuestionAnswer (authedUser, qid, answer) {
    return _saveQuestionAnswer(authedUser, qid, answer)
  }