import { connect } from "react-redux";
import Poll from "./Poll";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = (props) => {
    const question = props.question;
    return (
    <div className="poll-page">

      {/* {question ? <Poll id={props.id} /> : <Link to={`/`} className="">Page Not found</Link> } */}
      {question ? <Poll id={props.id} /> : <div className="page-not-found">Page Not found</div>}

    </div>
    )
}

const mapStateToProps = ({authedUser, pollQuestions, users}, props) => {
    const { id } = props.router.params;
    const question = pollQuestions[id];

    return {
        authedUser,
        question: question,
        users,
        id,
    }
}
export default withRouter(connect(mapStateToProps)(PollPage));