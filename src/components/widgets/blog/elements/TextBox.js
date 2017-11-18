import PropTypes from 'prop-types';
import DOM from 'react-dom-factories'; 

const TextBox = (props) => (
  DOM.span(
    null,
    props.children
  )
); 

TextBox.defaultProps = {
  children: 'Wat?'
};

TextBox.propTypes = {
  children: PropTypes.string
};

export default TextBox;
