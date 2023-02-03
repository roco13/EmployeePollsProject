import { render, waitFor } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import middleware from '../middleware';
import reducer from '../reducers';
import { getInitialData } from "../utils/api";
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import {setAuthedUser} from '../actions/authedUser';
import { MemoryRouter } from 'react-router';
import { act } from "react-dom/test-utils";
import Leaderboard from './Leaderboard';

const store =  createStore(reducer, middleware);

describe('Leaderboard', () => {
  beforeAll( async () => {
    await getInitialData()
        .then((data) => act(() => {
            store.dispatch(receiveUsers(data.users));
            store.dispatch(receiveQuestions(data.questions));
            store.dispatch(setAuthedUser('sarahedo'));
        }))
  });
  it('will display the correct user name, number of questions asked, and number of questions answered', async () => {
    const id ='vthrdm985a262al8qx3do';
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Leaderboard />
        </MemoryRouter>
      </Provider>
    )

    const author = component.getByTestId('poll-user-sarahedo').innerHTML;
    const answers = component.getByTestId('poll-user-num-answers-sarahedo').innerHTML;
    const questions = component.getByTestId('poll-user-num-questions-sarahedo').innerHTML;
     
    await  waitFor(() => expect(author).toEqual('Sarah Edo'));
    await  waitFor(() => expect(answers).toEqual("4"));
    await  waitFor(() => expect(questions).toEqual("2"));
  });

});