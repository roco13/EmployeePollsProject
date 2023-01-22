import { connect } from "react-redux";
import Poll from "./Poll";
import { useLocation, useNavigate, useParams} from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = ({question, id}) => {
  
    return (
    <div className="poll-page">

      {question ? <Poll id={id} /> : <div className="page-not-found">Page Not found</div>}

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