import React from 'react'; 
import PropTypes from 'prop-types'; 

const Quote = ({quote}) => {
    console.log(quote); 
  return(   
  <>
        <img src={quote.image}></img>
        <p>{quote.name}</p>
        <p>{quote.text}</p>
    </>
    )

  
}; 


Quote.propTypes = { 
    quote: PropTypes.object.isRequired
}


export default Quote; 