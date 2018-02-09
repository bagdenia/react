import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Text = ({ name, value, onChange, label, error }) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}:</label>
    <input
      name={name}
      id={name}
      className="ui input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

Text.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default Text;
