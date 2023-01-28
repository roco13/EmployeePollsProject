import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../tests/store';
import configureStore from "redux-mock-store";
import { MemoryRouter } from 'react-router';
import NewPoll from './NewPoll';


describe('NewPoll', () => {
    const component = render(
        <MemoryRouter>
            <Provider store={store}>
             <NewPoll />
        </Provider>
       </MemoryRouter>
     );
     const option1 = component.getByTestId('option-one-input');
     const option2 = component.getByTestId('option-two-input');
     const submitButton = component.getByTestId('submit-button');

     it('will have a field for option 1 field, one field for option 2 and a submit button', () => {
        expect(option1).toBeInTheDocument();
        expect(option2).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
    it('will not submit for if option 1 field is empty', () => {
        fireEvent.change(option1, {target: {value: ""}});
        expect(submitButton).toBeDisabled();
    })
    it('will navigate to the Home on submit', () => {
        fireEvent.change(option1, { target: { value: 'Text for Option 1' } });
        fireEvent.change(option2, { target: { value: 'Text for Option 1' } });
        // fireEvent.click(submitButton);
        // expect(component.queryByTestId('success-header')).not.toBeInTheDocument();
        // expect(component.getByTestId('error-header')).toBeInTheDocument();
    })
    


    // test('renders without crashing', () => {
    //     const mockStore = configureStore([]);
    //     const store = mockStore(initialState);
    //     ReactDOM.render(
    //     <MemoryRouter>
    //         <Provider store={store}>
    //          <NewPoll />
    //      </Provider>
    //     </MemoryRouter>,
         
    //      document.createElement('div'));
    //    });
   
        // var OptionOneInput = component.getByTestId('option-one-input')
        // var OptionTwoInput = component.getByTestId('option-two-input')
        // expect(OptionOneInput).toBeInTheDocument();
        // expect(OptionTwoInput).toBeInTheDocument();

        // var submitButton = component.getByText('Submit')
        // expect(submitButton).toBeInTheDocument();
 
})