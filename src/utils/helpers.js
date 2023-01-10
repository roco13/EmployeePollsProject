export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}


export function formatPoll (question, users,authedUser) {
  const { id, author, timestamp, optionOne,optionTwo } = question;
  const {name,avatarURL} = users[author];
  const {answers} = authedUser;
console.log("HELPER question", question)


const pollWasAnswered = Object.keys(answers).includes(id)
let optionChoosen;
pollWasAnswered ? optionChoosen=answers[id] : optionChoosen=null;

  return {
   // name,
    id,
    author,
    timestamp,
    optionOne: optionOne.text,
    optionTwo: optionTwo.text,
    optionOneVotes: optionOne.votes,
    optionTwoVotes: optionTwo.votes,
    name,
    avatar: avatarURL,
    answers,
    pollWasAnswered,
    optionChoosen,
  }
}