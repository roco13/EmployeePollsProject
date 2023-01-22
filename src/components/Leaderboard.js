import { connect } from "react-redux";

const Leaderboard = ({users}) => {

    return (
        <div className="leaderboard">
            <h3>Leaderboard</h3>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Answers</th>
                        <th>Questions</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td className="leaderboar-name">{user.name}</td>
                        <td className="leaderboar-num-answers">{Object.keys(user.answers).length}</td>
                        <td className="leaderboar-num-questions">{user.questions.length}</td>
                    </tr>
                ))}

                </tbody>
            </table>
            
        </div>
    )
}
const mapStateToProps = ({ users }) => {

    const userValues = Object.values(users);

    const newUserList = userValues.sort((a, b) => (Object.keys(b.answers).length)- (Object.keys(a.answers).length ))

    return {
        users: newUserList,
    }

};

export default connect(mapStateToProps)(Leaderboard);