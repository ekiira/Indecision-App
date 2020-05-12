/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';

const Option = ({ count, optionText, handleRemove }) => (
  <div className="option">
    <p className="option__text">
      {count}
      .
      {' '}
      {optionText}
    </p>

    <button
      type="button"
      className="button button--link"
      onClick={(e) => {
        handleRemove(optionText);
      }}
    >
      Remove
    </button>

  </div>
);

export default Option;
