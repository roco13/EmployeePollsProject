import { fireEvent, render, waitFor,screen } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import middleware from '../middleware';
import reducer from '../reducers';
import { getInitialData } from "../utils/api";
import { receiveUsers } from '../actions/users';
import {setAuthedUser} from '../actions/authedUser';
import { receiveQuestions } from '../actions/questions';
import { MemoryRouter } from 'react-router';
import { act } from "react-dom/test-utils";

import Dashboard from './Dashboard';

const store =  createStore(reducer, middleware);

describe('Dashboard', () => {
  
  beforeAll( async () => {
    await getInitialData()
        .then((data) => act(() => {
            store.dispatch(receiveUsers(data.users));
            store.dispatch(receiveQuestions(data.questions));
            store.dispatch(setAuthedUser('sarahedo'));

        }))
  })
 
  it('will display the button to see new Polls',  () => {
    
    const component = render(
      <Provider store={store}>
          <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    )
    const answeredPollsBtn = component.getByTestId('answered-polls');

    fireEvent.click(answeredPollsBtn);
    expect(component.getByTestId('new-polls')).toBeInTheDocument();
  });

})
