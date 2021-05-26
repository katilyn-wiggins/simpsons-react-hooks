import React, { useState } from 'react'; 
import Load from '../components/quote/Load'; 
import Quote from '../components/quote/Quote';
import { getQuote } from '../services/simpsonsApi'; 

const Simpsons = () => {
    const [quote, setQuote] = useState({}); 


    const handleClick = async() => {
        const quote = await getQuote(); 
        setQuote(quote);
    }; 
    
    
    return(
        <>
            <h1>Simpsons Quote Generator</h1>
            <Load onClick={handleClick} /> 
            <Quote quote={quote} /> 
        </>
    ); 
} 


export default Simpsons; 