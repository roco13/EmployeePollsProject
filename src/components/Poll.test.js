import { render } from '@testing-library/react';
import * as React from 'react';
import Poll from './Poll';
import { createStore } from "redux";
 import reducer from '.store/reducer'

 const store = createStore(reducer);

describe('Poll', () => {
    it('will match snapshot', () => {
        var component = render(<Poll id='8xf0y6ziyjabvozdd253nd' />);
        expect(component).toMatchSnapshot();
    })
    
})