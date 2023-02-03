import { connect } from "react-redux";
import Poll from "./Poll";
import { useLocation, useNavigate, useParams} from "react-router-dom";
import NotFound from "./NotFound";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = ({question, id, authedUser}) => {
  
    return (
    <div className="poll-page">

      {question ? <Poll id={id} /> : <NotFound />}
   
    </div>
    )
}

const mapStateToProps = ({questions}, props) => {
    const { id } = props.router.params;
    const question = questions[id];

    return {
        question,
        id,
    }
}
export default withRouter(connect(mapStateToProps)(PollPage));