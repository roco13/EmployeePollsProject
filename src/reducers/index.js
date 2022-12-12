import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import pollQuestions from "./pollQuestions";
import { loadingBarReducer } from "react-redux-loading-bar";


export default combineReducers({
    authedUser,
    users,
    pollQuestions,
    loadingBar: loadingBarReducer,
})