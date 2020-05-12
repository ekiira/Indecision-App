/* eslint-disable react/prop-types */

import React from 'react';

const Action = ({ handlePick, hasOptions }) => (
  <div>
    <button
      type="submit"
      className="big-button"
      onClick={handlePick}
      disabled={!hasOptions}
    >
      What should i do?
    </button>
  </div>
);

export default Action;
