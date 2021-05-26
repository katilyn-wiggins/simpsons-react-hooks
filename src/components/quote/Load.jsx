import React from 'react'; 
import PropTypes from 'prop-types'; 

const Load = ({ onClick }) => (
    <button type='button' onClick={onClick}>Press Here for Quote</button>
); 


Load.propTypes = { 
    onClick: PropTypes.func.isRequired, 
}


export default Load; 