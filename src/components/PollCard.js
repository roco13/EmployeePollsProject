import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";

const PollCard = (props) => {
    console.log("PROPS IN POLL Card", props.question)
    const navigate = useNavigate();

   
      if (props.question === null) {
        return <p>This Poll doesn't exist</p>;
      }
      const {
        id,
        author,
        timestamp,
      } = props.question;
      
      const avatar = props.users[author].avatarURL
      console.log("AVATAR", avatar)

    console.log("PROPS IN POLL", props)
    return (
      <li>
        <p><img src={avatar} width="50" height="50"/></p>
        <h4 className="poll-author">{author}</h4>
        <p>{formatDate(timestamp)}</p>
        <Link to={`/question/${id}`} id={id} className="go-to-poll">Show</Link>
      </li>
        
    )
}

const mapStateToProps = ({authedUser, pollQuestions, users}, {id}) => {
  console.log("inside mapStateToProps in PollCard", `
    autherdUser ${authedUser}, 
    pollQuestions ${pollQuestions},
    users ${users}
    ID ${id}
  `)
    const question = pollQuestions[id];
    const userChooseOptionOne = question.optionOne.votes;
        const userChooseOptionTwo = question.optionTwo.votes;
        const urserAnswered =userChooseOptionOne.concat(userChooseOptionTwo)
        // console.log("1 votes", userChooseOptionOne)
        // console.log("2 votes", userChooseOptionTwo)
        console.log("All votes", urserAnswered)
        console.log("USERS= ", users)
        //console.log("author= ", users[question.author][avatarURL])

    return {
        authedUser,
        question: question,
        pollQuestions: pollQuestions,
        users,
    }
}

export  default connect(mapStateToProps)(PollCard);