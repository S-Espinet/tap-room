import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function TapList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.tapList.map((keg) =>
        <Keg 
          whenKegClicked = { props.onKegSelection }
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          flavor={keg.flavor}
          pints={keg.pints}
          id={keg.id}
          key={keg.id} />
      )}
      <hr />
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onKegSelection: PropTypes.func,
};

export default TapList