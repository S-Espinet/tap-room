import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' />
        <input
          type='hidden'
          name='pintsLeft'
          value='124'/>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      flavor: event.target.flavor.value,
      pintsLeft: Number(event.target.pintsLeft.value),
      id: v4()
    });
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;