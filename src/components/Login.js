
import { connect } from "react-redux";
import { useState } from "react";
import {handleLogin, handleLogout} from "../actions/authedUser";

const Login = ({users, UserLoginLogout, dispatch}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const handleChange = (e) => {
    //     setUsername(e.target.elements.username.value);
    //     setPassword(e.target.elements.password.value)
    //   };

    function handleSubmit(e){

        e.preventDefault();

        setUsername(e.target.elements.username.value)
        setPassword(e.target.elements.password.value)

        console.log("USERNAE", e.target.elements.username.value)
        console.log("password", e.target.elements.password.value)
        dispatch(handleLogin(e.target.elements.username.value,e.target.elements.password.value));//event.target.elements.username.value

    }
      
    return (
        <div>
        Login
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" defaultValue="sarahedo" onChange={(e) => console.log(e)} />
            <input type="text" placeholder="Password" name="password" defaultValue="password123" onChange={(e) => console.log(e)} />
            <button>Submit</button>
        </form>
        
        </div>
    )
}
const mapStateToProps = ({ users, UserLoginLogout }) => ({
    UserLoginLogout,
    users
  });
  
export default connect(mapStateToProps)(Login);
