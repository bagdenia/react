import PropTypes from 'prop-types';
import DOM from 'react-dom-factories'; 

const Image = ({ src, height, width, alt }) => (
  DOM.img({ src, height, width, alt })
);

Image.defaultProps = {
  src: 'https://pp.userapi.com/c5641/u5790356/134714790/x_d1448a03.jpg',
  width: 200,
  alt: 'default alt'
};

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
};

export default Image;
