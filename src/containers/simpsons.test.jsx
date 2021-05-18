import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'; 
import Simpsons from './Simpsons'; 


describe('Simpsons Container', () => {
    it('returns a quote on button click', async() => {
        render(<Simpsons />); 

        const button = await screen.getByRole('button'); 
        fireEvent.click(button); 

        return waitFor(() => {

        });
    });
});