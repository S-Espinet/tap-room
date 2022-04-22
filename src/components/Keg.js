import React from 'react';
import PropTypes from 'prop-types';

function Keg() {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
}

export default Keg;