import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';
import NewPoll from './NewPoll';

const store = createStore(reducer, middleware);

describe('NewPoll', () => {
    const component = render(
       <MemoryRouter>
          <Provider store={store}>
             <NewPoll />
         </Provider>
       </MemoryRouter>
     )
     const option1 = component.getByTestId('option-one-input');
     const option2 = component.getByTestId('option-two-input');
     const submitButton = component.getByTestId('submit-button');
     const mockedNavigate = jest.fn();
    
     it('will have a text input field for option 1, a text input field for option 2 and a submit button', () => {
        expect(option1).toBeInTheDocument();
        expect(option2).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it('will not be able to click on submit button if option 1 field is empty', () => {
        fireEvent.change(option1, {target: {value: ""}});
        expect(submitButton).toBeDisabled();
    });

    it('will navigate to the Home on submit', () => {
        fireEvent.change(option1, { target: { value: 'Text for Option 1' } });
        fireEvent.change(option2, { target: { value: 'Text for Option 1' } });
        fireEvent.click(submitButton);
        expect(mockedNavigate("/"));
    });

})