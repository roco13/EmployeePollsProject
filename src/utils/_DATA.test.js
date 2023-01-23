import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe('_saveQuestion', () => {
    it('will return the question  and all expected fields are populated', async() => {
        const question = {
            optionOneText: "Code with visual code",
            optionTwoText: "Code with SimpleText",
            author: "mtsamis",            
        }
        const result = {
            author: question.author,
            optionOne: {
                text: question.optionOneText,
            },
            optionTwo: {
                text: question.optionTwoText,
            }
        }
        await expect(_saveQuestion(question)).resolves.toMatchObject(result);
    });

    it('will return an error if incorrect data is passed', async() => {
        await expect(_saveQuestion({})).rejects.toEqual("Please provide optionOneText, optionTwoText, and author")
    });
})

describe('_saveQuestionAnswer', () => {
    it('will return true if the saved question answer is returned and all expected fields are populated', async() =>{

        const authedUser = "sarahedo";
        const qid = "8xf0y6ziyjabvozdd253nd";
        const answer = 'optionOne';
     
        await expect(_saveQuestionAnswer({authedUser,qid,answer})).resolves.toBe(true)

    });
    it('will return an error if incorrect data is passed', async() => {
        await expect(_saveQuestionAnswer({})).rejects.toEqual("Please provide authedUser, qid, and answer")
    });
})