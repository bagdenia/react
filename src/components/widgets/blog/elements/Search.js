import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const Search = ({ find }) => (
  <Input 
    icon='search' 
    placeholder='Search...' 
    onChange={ (e) => find(e.currentTarget.value) }/>
);

Search.propTypes = {
  find: PropTypes.func,
};


export default Search;
