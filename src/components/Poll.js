import { connect } from "react-redux";
import { formatPoll } from "../utils/helpers";
import { handleAddAnswerToQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const Poll = ({dispatch, formatedQuestion, authedUser}) => {

const navigate = useNavigate();

const {id,
  author,
  timestamp,
  optionOne,
  optionTwo,
  optionOneVotes,
  optionTwoVotes,
  name,
  avatar,
  answers,
  optionChoosen } = formatedQuestion;

  let {pollWasAnswered} = formatedQuestion;
  const numVotesOptionOne= optionOneVotes.length;
  const numVotesOptionTwo= optionTwoVotes.length;

  const prcVotesOne = numVotesOptionOne > 0 ? 
  (numVotesOptionOne / (numVotesOptionOne+numVotesOptionTwo)).toFixed(2) * 100 : 0;
  const prcVotesTwo = numVotesOptionTwo > 0 ?
  (numVotesOptionTwo / (numVotesOptionOne+numVotesOptionTwo)).toFixed(2) * 100 : 0; 
  
  function handleVote(e, option) {
    e.preventDefault();

    const answerId =  "option"+option; 
    dispatch(handleAddAnswerToQuestion(authedUser,id,answerId));
    navigate(`/question/${id}`)
  }

  return (
      
      <div className="poll-container">
        <div className="poll">
          <h1>Poll By {name}</h1>
          <p className="avatar"><img src={avatar} /></p>
          {pollWasAnswered &&  <h2>Would You Rather:</h2>}
          
          <div className="poll-options">
            <div className="poll-option" id="poll-optionOne">
              <p className="poll-option-text">{optionOne}</p>
              {pollWasAnswered ? (
                <p className="poll-option-stats">Number of votes: {numVotesOptionOne}<br />{prcVotesOne}% of people voted for this option.
    
                {optionChoosen === "optionOne" &&<span className="poll-option-selected">You voted for this option</span>}
                </p>
                
              ) : (<button data-testid="vote-option-one" onClick={(e) => handleVote(e,"One")}>SELECT</button>)  }
              
            </div>
            <div className="poll-option" id="poll-optionTwo">
              <p className="poll-option-text">{optionTwo}</p>
              {pollWasAnswered ? (
                <p className="poll-option-stats">Number of votes: {numVotesOptionTwo}<br />{prcVotesTwo}% of people voted for this option.

                {optionChoosen === "optionTwo" &&<span className="poll-option-selected">You voted for this option</span>}

                </p>
              ) : (<button data-testid="vote-option-two" onClick={(e) => handleVote(e,"Two")}>SELECT</button>)  }
            </div>
          </div>
      </div>
    </div>
    )
}

const mapStateToProps = ({authedUser, questions, users}, {id}) => {

    const question = questions[id];

    return {
        authedUser,
        formatedQuestion: question
        ? formatPoll(question,users,authedUser) : null,
    }
}

export  default connect(mapStateToProps)(Poll);