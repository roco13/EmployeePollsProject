/* import { _getUsers} from "../utils/_DATA"; */

import authedUser from "../reducers/authedUser";

export const LOGIN_AUTHED_USER = "LOGIN_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export function loginAuthedUser(user){
    console.log("user", user)
    return {
        type: LOGIN_AUTHED_USER,
       user,
    }
}
export function logoutAuthedUser(){
    return {
        type: LOGOUT_AUTHED_USER,
    }
}

export function handleLogin(username, password){
    
    return (dispatch, getState) => {
        const { users } = getState();
     
        const usersIdsValues = Object.values(users);
        const validUser = usersIdsValues.find((user) => user.id === username);

        if(validUser){
            if(validUser.id === username && validUser.password === password){
                return dispatch(loginAuthedUser(validUser))
            } else {
                alert("User Not Recognized")
            }
        } else {
            alert("User Not Recognized")
    }
  }
}  
  
export function handleLogout()  {
    return  dispatch => {
      return dispatch(logoutAuthedUser())
    }
}

export function mapUsersAnswers(user, ids, questions) {
    return (dispatch, getState) => {
    const A = Object.values(user)
    console.log("AAA", A)
    }
}