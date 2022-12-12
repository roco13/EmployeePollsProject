import { connect } from "react-redux";
import { formatPoll } from "../utils/helpers";

import { useNavigate, Link } from "react-router-dom";

const Poll = (props) => {
    console.log("PROPS IN POLL", props)
    const navigate = useNavigate();

   
      if (props.question === null) {
        return <p>This Poll doesn't exist</p>;
      }
      const {
        id,
        author,
        avatar,
        optionOne,
        optionTwo,
        userChooseOptionOne,
        userChooseOptionTwo,
      } = props.question;

    console.log("PROPS IN POLL", props)
    return (
        <Link to={`/question/${id}`} className="tweet">
in poll
        </Link>
    )
}

const mapStateToProps = ({authedUser, pollQuestions, users}, {id}) => {
    const question = pollQuestions[id];
    const userChooseOptionOne = question.optionOne.votes;
        const userChooseOptionTwo = question.optionTwo.votes;
        const urserAnswered =userChooseOptionOne.concat(userChooseOptionTwo)
        // console.log("1 votes", userChooseOptionOne)
        // console.log("2 votes", userChooseOptionTwo)
        console.log("All votes", urserAnswered)
        console.log("USERS= ", users)

    return {
        authedUser,
        question: question
        ? formatPoll(question,users) : null,
        urserAnswered: urserAnswered,
        users,
    }
}

export  default connect(mapStateToProps)(Poll);