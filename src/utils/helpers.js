export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}


export function formatPoll (question, users) {
  const { id, author, optionOne,optionTwo, optionOneVotes, optionTwoVotes } = question
  //const { userId, password, name, avatarURL, answers, questions } = users
  const { avatarURL } = users

  console.log("formatPoll", 
  id,
  author,
  optionOne,
  optionTwo,
  optionOneVotes,
  optionTwoVotes,
  avatarURL, 
  /* answers, 
  questions */ "end of formatPoll")
  return {
   // name,
    id,
    author,
    optionOne: optionOne.text,
    optionTwo: optionTwo.text,
    optionOneVotes: optionOne.votes,
    optionTwoVotes: optionTwo.votes,
    avatar: avatarURL,

  }
}