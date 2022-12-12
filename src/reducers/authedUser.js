import { LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state=null, action){
    //console.log("store.action= ", state.action, "action.id= ", action.id )
    
    switch(action.type){
        case LOGIN_AUTHED_USER:
            return action.user;
        case LOGOUT_AUTHED_USER:
            return state.user = null;
        default:
            return state;
    }
}
