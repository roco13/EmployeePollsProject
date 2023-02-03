import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from "../actions/shared"
import Dashboard from './Dashboard';
import Login from './Login';
import NewPoll from './NewPoll';
import Nav from './Nav';
import Logged from "./Logged";
import PollPage from "./PollPage";
import Leaderboard from "./Leaderboard";
import NotFound from './NotFound';
import LoadingBar from 'react-redux-loading-bar';
import { Routes, Route } from 'react-router-dom';
import authedUser from '../reducers/authedUser';

const App = ({loading, dispatch}, props) => {

  useEffect( () => {
    dispatch(handleInitialData())
  },[]);
  
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">     
      {
        loading === true ? < Login /> : (
        <div>
          <header className="">
            <Nav />
            {<Logged />}
          </header>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/add"  element={<NewPoll />} />
            <Route path="/leaderboard"  element={<Leaderboard />} />
            <Route path="/question/:id"  element={<PollPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        )
      }
    </div>
    </Fragment>   
  );
}

const mapStateToProps = ({authedUser}) => (
  {
    loading: authedUser === null,
  }
)

export default connect(mapStateToProps)(App);
