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
import PollCard from './PollCard';

const store =  createStore(reducer, middleware);

describe('PollCard', () => {
  beforeAll( async () => {
    await getInitialData()
        .then((data) => act(() => {
            store.dispatch(receiveUsers(data.users));
            store.dispatch(receiveQuestions(data.questions));
            store.dispatch(setAuthedUser('sarahedo'));
        }))
  });

 
  it('will display poll author and timestamp',  async () => {
      const id ='vthrdm985a262al8qx3do';
      const component = render(
        <Provider store={store}>
            <MemoryRouter>
              <PollCard id={id} />
          </MemoryRouter>
        </Provider>
      )
      const author = component.getByTestId('poll-author');
      const timestamp = component.getByTestId('timestamp');
      await waitFor(() => expect(author).toBeInTheDocument());
      await waitFor(() => expect(timestamp).toBeInTheDocument());

  });

});