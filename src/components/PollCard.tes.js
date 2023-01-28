import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../tests/store';
import configureStore from "redux-mock-store";
import { MemoryRouter } from 'react-router';
import PollCard from './PollCard';

describe('PollCard', () => {
    var component = render(
        <MemoryRouter>
            <Provider store={store}>
             <PollCard id={store.id} />
        </Provider>
       </MemoryRouter>
     );
console.log(store)
    it('will display poll author and timestamp', () => {
       

        var author = component.getByTestId('poll-author');
        var timestamp = component.getByTestId('timestamp');
        //var submitButton = component.getByTestId('submit-button');
        expect(author).toBeInTheDocument();
        expect(timestamp).toBeInTheDocument();
       // expect(submitButton).toBeInTheDocument();

        
    });
    it("should navigate to the question page", async () => {
        const link = component.getByTestId("go-to-poll");
        fireEvent.click(link);
        await waitFor(() => {
          screen.debug();
        });
      });
});