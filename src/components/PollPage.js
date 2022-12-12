import { connect } from "react-redux";
import Poll from "./Poll";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
    console.log("PROPS IN POLLPAGE", props.question)
    return <div>POLL
    {/* Poll Page {props.id}
    <Poll id={props.id} /> */}
    </div>
}

const mapStateToProps = ({authedUser, pollQuestions, users}, {props}) => {

  console.log('INSIDE mapStateToProps in PollPage', props)
     const { id } = props.router.params;
    const question = pollQuestions[id];

    return {
        authedUser,
        question: question,
        users,
    }
}
export default withRouter(connect(mapStateToProps)(PollPage));