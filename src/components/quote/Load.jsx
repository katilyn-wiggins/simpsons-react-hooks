import React from 'react'; 
import PropTypes from 'prop-types'; 

const Load = ({ quote, onClick }) => (
    <button type='button' value={quote} onClick={onClick}>Press Here for Quote</button>
); 


Load.propTypes = { 
    onClick: PropTypes.func.isRequired, 
    quote: PropTypes.string.isRequired 
}


export default Load; 