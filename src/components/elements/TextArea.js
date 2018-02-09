import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ name, value, onChange, label }) => (
  <div className="ui field">
    <label htmlFor={name}>{label}:</label>
    <textarea
      name={name}
      id={name}
      className="ui input"
      value={value}
      onChange={onChange}
    />
  </div>
);

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default TextArea;
