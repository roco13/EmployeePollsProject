import { connect } from "react-redux";
import { useNavigate} from "react-router-dom";
import {logoutAuthedUser} from "../actions/authedUser";

const Logged = ({dispatch, authedUser}) => {
    console.log("{authedUser in Logged}", {authedUser})
    const navigate = useNavigate();
    const handleLogout = () => {
		dispatch(logoutAuthedUser());
		navigate("/");
	};
    return (
        <nav className="user-logged">
            <ul>
                <li className="user-name">
                   {authedUser.name}
                </li>
                <li>
                    <a onClick={handleLogout}>Logout</a>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({dispatch, authedUser}) => {

    return {
        dispatch,
        authedUser,
    }
}
export default connect(mapStateToProps)(Logged);