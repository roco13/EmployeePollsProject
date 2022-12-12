import { connect } from "react-redux";
import Poll from "./Poll";
import { mapUsersAnswers } from "../actions/authedUser";
import PollList from "./PollList";
import { formatDate } from "../utils/helpers";

import { Link} from "react-router-dom";
import PollCard from "./PollCard";

const Dashboard = (props) => {
  console.log("PROPS IN Dashboard = ", props)
 //console.log("pollQuestions", props.pollQuestions)

 

 // console.log("authedUserInfo", authedUserInfo)
  const currentUser = props.authedUser
  //const answers =Object.keys(currentUser)
  console.log("currentUser.currentUser", currentUser)

  let newPolls = [];
  let currentUserAnswers =[];
  if(currentUser) {
      currentUserAnswers = Object.keys(currentUser.answers)
      console.log("currentUser.answers ", currentUserAnswers)
      

        
      // make a Set to hold values from namesToDeleteArr
      const pollsToDeleteSet = new Set(currentUserAnswers);
      
      // use filter() method
      // to filter only those elements
      // that need not to be deleted from the array
      newPolls = props.questionIds.filter((id) => {
        // return those elements not in the pollsToDeleteSet
        return !pollsToDeleteSet.has(id);
      });
      

  }
    return (
       <div className="dashboard-container">
          <Poll id="6ni6ok3ym7mf1p33lnez" />
          <PollList  id="6ni6ok3ym7mf1p33lnez" />
        <h3 className="center">New Question</h3>
        <ul className="dashboard-list">
         {
          newPolls.map( (id) => {
              return <PollCard key={id} id={id} />
            })           
          } 
        </ul>
        <hr />
        <h3 className="center">Answered Questions</h3>
        <ul className="dashboard-list">
        {
        currentUserAnswers.map( (id) => {
            return <PollCard key={id} id={id} />
          })          
        } 
        </ul>
      </div>
    )
}

const mapStateToProps = ({pollQuestions, authedUser}) => {
    console.log("pollQuestions", pollQuestions)
    const questionIds = Object.keys(pollQuestions).sort(
        (a,b) => pollQuestions[b].timestamp - pollQuestions[a].timestamp
    );

    return {
        pollQuestions,
        questionIds: questionIds, 
        authedUser,
    }
}

export default connect(mapStateToProps)(Dashboard);