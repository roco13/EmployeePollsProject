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
import Poll from './Poll';

const store =  createStore(reducer, middleware);

describe('Poll', () => {
  beforeAll( async () => {
    await getInitialData()
        .then((data) => act(() => {
            store.dispatch(receiveUsers(data.users));
            store.dispatch(receiveQuestions(data.questions));
            store.dispatch(setAuthedUser('sarahedo'));
        }))
  })

  it('will contain one button to vote for option one and one button to vote for option 2', async () => {
      const id ='vthrdm985a262al8qx3do';
      const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <Poll id={id} />
          </MemoryRouter>
        </Provider>
      )

      const voteOne = component.getByTestId('vote-option-one');
      const voteTwo  = component.getByTestId('vote-option-two');  
       
      await  waitFor(() => expect(voteOne).toBeInTheDocument());
      await  waitFor(() => expect(voteTwo).toBeInTheDocument());
  });

  it('will display on the page the option the user voted for in the poll', async () => {
    const id ='8xf0y6ziyjabvozdd253nd';
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Poll id={id} />
        </MemoryRouter>
      </Provider>
    )
    const vote = component.getByText('You voted for this option')
    await  waitFor(() => expect(vote).toBeInTheDocument());
  });

});