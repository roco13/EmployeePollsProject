import { connect } from "react-redux"
import PollCard from "./PollCard";

const Dashboard = ({questionsIds, loggedUser}) => {
    
    const answersIds = Object.keys(loggedUser.answers);
    const pollsToSelectSet = new Set(answersIds);
    const newPolls = questionsIds.filter( (id) => !pollsToSelectSet.has(id));
    const answeredPolls = questionsIds.filter( (id) => pollsToSelectSet.has(id));

    return (
        <div className="dashboard-container">
            <h3 className="center">New Questions</h3>
            <ul className="dashboard-list">
                {
                newPolls.map( (id) => (
                    <PollCard key={id} id={id} />
                ))           
                } 
            </ul>
            <hr />
            <h3 className="center">Answered Questions</h3>
            <ul className="dashboard-list">
                {
                answeredPolls.map( (id) => {
                    return <PollCard key={id} id={id} />
                })          
                } 
            </ul>
        </div>
    );
}

const mapStateToProps = ({questions,users,authedUser}) => {
    const loggedUser = users[authedUser]
    return {
        questionsIds: Object.keys(questions).sort( (a,b) => (
            questions[b].timestamp - questions[a].timestamp
        )),
        loggedUser,
    };    
}

export default connect(mapStateToProps)(Dashboard);