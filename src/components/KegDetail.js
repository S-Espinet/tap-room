import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingSell } = props;
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>Name: {keg.name}</h3>
      <h3>Brand: {keg.brand}</h3>
      <h3>Price / Pint: {"$" + keg.price + ".00"}</h3>
      <h3>Flavor: {keg.flavor}</h3>
      <button onClick={onClickingSell}>Sell Pint</button>
      <h3>Pints Left: {keg.pintsLeft}</h3>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSell: PropTypes.func
}

export default KegDetail;