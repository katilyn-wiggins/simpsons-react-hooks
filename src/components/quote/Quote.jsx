import React from 'react'; 
import PropTypes from 'prop-types'; 

const Quote = ({quote}) => {
  return(   
    <figure aria-label="character-quote" role="quote">
        <img src={quote.image} alt={quote.name}></img>
        <p>{quote.name}</p>
        <p>{quote.text}</p>
    </figure>
    )

  
}; 


Quote.propTypes = { 
    quote: PropTypes.object.isRequired
}


export default Quote; 