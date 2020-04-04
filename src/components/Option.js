/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}
      .
      {' '}
      {props.optionText}
    </p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleRemove(props.optionText);
      }}
    >
      Remove
    </button>

  </div>
);

export default Option;
