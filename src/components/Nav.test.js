
import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Nav from './Nav';

describe('Nav', () => {
    it('will match snapshot', () => {
        const component = render(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
           
        );
        expect(component).toMatchSnapshot();
    })
})