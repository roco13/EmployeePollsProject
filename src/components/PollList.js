import { connect } from "react-redux";
import Poll from "./Poll";
import { mapUsersAnswers } from "../actions/users"
import authedUser from "../reducers/authedUser";

const PollList = (props, {id}) => {
    console.log("PROPS IN POLL List", props)
    
    console.log("pollQuestions", props.pollQuestions)
    // const authedUserInfo= Object.values(props.authedUser)
    // console.log("authedUserInfo", authedUserInfo)
    const currentUser = props.authedUser
    //const answers =Object.keys(currentUser)
    console.log("currentUser.currentUser", currentUser)
    let answeredPoll = [];
    let newPolls = [];
    if(currentUser) {
        const currentUserAnswers = Object.keys(currentUser.answers)
        console.log("currentUser.answers ", currentUserAnswers)
        return <p>poll list</p>
    }

}
const mapStateToProps = ({ authedUser, pollQuestions }) => ({
    authedUser,
    pollQuestions,
  });
export default connect(mapStateToProps)(PollList);