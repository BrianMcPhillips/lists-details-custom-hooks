import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ 
  name,
  status,
  occupation,
  image,
  description
}) => (
  <>
    <h2>{name}</h2>
    <p>{status}</p>
    <p>{occupation}</p>
    <img src={image} alt={name}/>
    <p>{description}</p>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Character;
