import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewPoll = ({dispatch}) => {
    const navigate = useNavigate();

   const[textOptionOne, setTextOptionOne] = useState("");
   const[textOptionTwo, setTextOptionTwo] = useState("");


    const handleChangeOption1 = (e) => {
        const textOptionOne= e.target.value;
        setTextOptionOne(textOptionOne);
    }
    const handleChangeOption2 = (e) => {
        const textOptionTwo= e.target.value;
        setTextOptionTwo(textOptionTwo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(textOptionOne, textOptionTwo))
        navigate("/");
    }
    
    const question1Left = 250 - textOptionOne.length;
    
    return (
        <div className="new-poll">
            <h3>Would You Rather:</h3>
            <form onSubmit={handleSubmit} >
                <input data-testid="option-one-input" type="text" name="optionOneText" placeholder="Enter Option One" maxLength={250} onChange={handleChangeOption1} />
                {question1Left <= 100 && <div>{question1Left}</div>}
                <input data-testid="option-two-input" type="text" name="optionTwoText" placeholder="Enter Option Two" maxLength={250} onChange={handleChangeOption2} />
                <button data-testid="submit-button" type="submit" disabled={textOptionOne === "" || textOptionTwo === ""}>Submit</button>
            </form>
        </div>
    )
}

export default connect()(NewPoll);