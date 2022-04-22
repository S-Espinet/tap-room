import React from 'react';
import Keg from './Keg';

function TapList() {
  return (
    <React.Fragment>
      <hr />
      {mainTapList.map((keg) =>
      <Keg 
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        flavor={keg.flavor}
        currentAmount={keg.currentAmount.concat(" pints")}
        id={keg.id}
        key={keg.id} />
      )}
    </React.Fragment>
  );
}

export default TapList