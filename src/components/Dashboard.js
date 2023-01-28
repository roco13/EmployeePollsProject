import { useState } from "react";
import { connect } from "react-redux";
import PollCard from "./PollCard";

const Dashboard = ({questionsIds, loggedUser}) => {

    const[displayAnswered, setDisplayAnswered] = useState(false);
    const[displayNew, setDisplayNew] = useState(true);
    
    const answersIds = Object.keys(loggedUser.answers);
    const pollsToSelectSet = new Set(answersIds);
    const newPolls = questionsIds.filter( (id) => !pollsToSelectSet.has(id));
    const answeredPolls = questionsIds.filter( (id) => pollsToSelectSet.has(id));

    const handleSubmit = (e) => {
        e.preventDefault();

        if(displayNew){
            setDisplayAnswered(true);
            setDisplayNew(false);
            return
        }
        if(displayAnswered){
            setDisplayAnswered(false);
            setDisplayNew(true);
            return
        }   
    }

    return (
        <div className="dashboard-container">
            {displayNew && <div><h3 className="center">New Questions
            <button onClick={handleSubmit} type="submit" value="Answered Polls" data-testid='answered-polls'>See Answered Polls</button>
            </h3>
            <ul className="dashboard-list">
                {
                newPolls.map( (id) => (
                    <PollCard key={id} id={id} />
                ))           
                } 
            </ul></div>}
            
            
            {displayAnswered && <div><h3 className="center">Answered Questions
            <button onClick={handleSubmit} type="submit" value="New Polls" data-testid='new-polls'>See New Polls</button>
            </h3>
            <ul className="dashboard-list">
                {
                answeredPolls.map( (id) => {
                    return <PollCard key={id} id={id} />
                })          
                } 
            </ul></div>}
            <hr />
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