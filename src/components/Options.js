/* eslint-disable react/prop-types */

import React from 'react';
import Option from './Option';

const Options = ({
  handleRemoveAll, hasOptions, options, handleRemove
}) => (
  <div>
    <div className="widget-header">
      <h3
        className="widget-header__title"
      >
        Your Options
      </h3>
      <button
        className="button button--link"
        onClick={handleRemoveAll}
        type="submit"
      >
        Remove all
      </button>
    </div>
    { !hasOptions && <p className="widget__message">Please add options to get started!</p> }
    {
                options.map((option, index) => (
                  <Option
                    key={option}
                    optionText={option}
                    count={index + 1}
                    handleRemove={handleRemove}
                  />
                ))
            }
  </div>
);

export default Options;
