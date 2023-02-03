import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";

const Login = ({users, dispatch}) => {
    const [username, setUsername] = useState('');

    function handdleClick(e) {
        e.preventDefault();
        setUsername(e.target.value)
        dispatch(setAuthedUser(e.target.value))
    }
    
    return (
      <div>
        <form className="user-login">
            <h1>Select User To Log In</h1>
            {users.length !== 0 && username === "" && (
            <ul className="user-login-selection">                
                {users.map( (user, index) => (
                    <li key={user.id} value={user.id} className={"user"+index}>
                       <input data-testid={user.id} type="image" id={"user"+index} value={user.id} alt={user.name} src={user.avatarURL} onClick={handdleClick} />
                       <span className="user-login-selection-name">{user.name}</span>
                    </li>
                ))}
            </ul>
          )}  
		</form>        
     </div>
    )
}
const mapsStateToProps = ({users,authedUser}) => {

    return {
        authedUser,
        users:Object.values(users),
    }
}
export default connect(mapsStateToProps)(Login);