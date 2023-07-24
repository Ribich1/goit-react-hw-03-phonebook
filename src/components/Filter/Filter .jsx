import React from 'react';

const Filter = ({ filterEl, onChangeEl }) => (
  <label>
    Find contacts by Name   
    <input type="text" value={filterEl} onChange={onChangeEl} />
  </label>
);

export default Filter;
