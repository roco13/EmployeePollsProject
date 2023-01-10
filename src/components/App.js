import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewPoll from "./NewPoll";
import PollPage from "./PollPage";
import Leaderboard from "./Leaderboard"
import Nav from "./Nav";
import Login from "./Login";
import Logged from "./Logged";
import PollList from "./PollList";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";;


const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
 
  return (
 
  <Fragment>    
  <LoadingBar /> 
  <div className="container">
    
    {
      
      props.authedUser === null ? <Login /> : (
        //save authedUser to store?
        <div>
          <header className="">
            <Nav />
            <Logged />
          </header>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/add"  element={<NewPoll />} />
            <Route path="/leaderboard"  element={<Leaderboard />} />
            <Route path="/question/:id"  element={<PollPage />} /> 
            {/* <Route path="/404"  element={<PageNotFound />} /> */}
          </Routes>
        </div>
      )
    }
  </div>
  </Fragment> 
  )
};

const mapStateToProps = ({ authedUser }) => ({
  //loading: authedUser === null,
  authedUser,
});

export default connect(mapStateToProps)(App);

