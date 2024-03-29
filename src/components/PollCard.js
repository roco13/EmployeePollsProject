import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";

const PollCard = ({question,users}) => {

    if (question === null) {
        return <p>This Poll doesn't exist</p>;
    }
    const {
        id,
        author,
        timestamp,
    } = question;
      
    const avatar = users[author].avatarURL;
    const name = users[author].name;
    

    return (
        <li>
        <p><img src={avatar} width="50" height="50" alt={`Avatar of ${name}`}/></p>
        <h4 className="poll-author" data-testid="poll-author">{author}</h4>
        <p data-testid="timestamp">{formatDate(timestamp)}</p>
        <Link data-testid="go-to-poll" to={`/question/${id}`} id={id} className="go-to-poll">Show</Link>
      </li>
    )

}

const mapStateToProps = ({questions, users}, {id}) => {
      const question = questions[id];

      return {
          question,
          users,
      }
  }
export default connect(mapStateToProps)(PollCard);