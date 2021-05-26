import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'; 
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Simpsons from './Simpsons'; 
import mockCharacterData from '../../fixtures/mockCharacterData.json'

const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
        return res(ctx.json(mockCharacterData)); 
    })
); 


describe('Simpsons Container', () => {
    beforeAll(() => server.listen()); 
    afterAll(() => server.close());
    it('returns a quote on button click', async() => {
        render(<Simpsons />); 

        const button = await screen.getByRole('button'); 
        fireEvent.click(button); 

        const figure = await screen.findByRole('quote')

        return waitFor(() => {
            expect(figure).toMatchSnapshot(); 
        })

    });
});