import { connect } from "react-redux";
import { useNavigate} from "react-router-dom";
import {logoutAuthedUser} from "../actions/authedUser";

const Logged = ({dispatch, name}) => {
    const navigate = useNavigate();
    const handleLogout = () => {
		dispatch(logoutAuthedUser());
		navigate("/");
	};
    return (
        <nav className="user-logged">
            <ul>
                <li className="user-name">
                   {name}
                </li>
                <li>
                    <a onClick={handleLogout}>Logout</a>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({users, authedUser}) => {
    const { name } = users[authedUser];
    
    return {
        name,
    }
}
export default connect(mapStateToProps)(Logged);