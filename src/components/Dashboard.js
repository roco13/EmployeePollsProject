import { connect } from "react-redux";
import PollCard from "./PollCard";

const Dashboard = (props) => {

  const currentUser = props.authedUser

  let newPolls = [];
  let currentUserAnswers =[];
  if(currentUser) {
      currentUserAnswers = Object.keys(currentUser.answers)
        
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

        <h3 className="center">New Questions</h3>
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