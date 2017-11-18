import PropTypes from 'prop-types';
import DOM from 'react-dom-factories'; 
import { formatDate } from 'helpers/date';

const Meta = ({ name, dateCreated, dateUpdated }) => (
  DOM.p(
    null,
    `Created by ${name} at ${dateCreated}, last modified at ${dateUpdated}`)
);

Meta.defaultProps = {
  name: 'Vasya',
  dateCreated: formatDate('2017-10-01'),
  dateUpdated: formatDate('2017-10-04')
};

Meta.propTypes = {
  name: PropTypes.string,
  dateCreated: PropTypes.string,
  dateUpdated: PropTypes.string
};

export default Meta;
