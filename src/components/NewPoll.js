import { useState } from "react";
import serializeForm from "form-serialize";
import { connect } from "react-redux";
import { handdleAddQuestion } from "../actions/pollQuestions";
import { useNavigate } from "react-router-dom";

const NewPoll = ({dispatch, authedUser}) => {
  const navigate = useNavigate();

   const[options, setOptions]= useState({
        optionOneText: "", 
        optionTwoText: "",
   });

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true });
        setOptions({ ...options})

        setOptions(Object.assign(options, values))
        
        dispatch(handdleAddQuestion(options["optionOneText"], options["optionTwoText"],authedUser ))

       navigate("/");

      };

    const questionLeft = 150 - options["optionOneText"].length;
    return (
        <div className="new-poll">
            <h3>Would You Rather:</h3>
            <form onSubmit={handleSubmit} >
                <input type="text" name="optionOneText" placeholder="Enter Option One" maxLength={150} />
                {questionLeft <= 100 && <div>{questionLeft}</div>}
                <input type="text" name="optionTwoText" placeholder="Enter Option Two" maxLength={150} />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ authedUser }) => ({
	authedUser
});

export default connect(mapStateToProps)(NewPoll);