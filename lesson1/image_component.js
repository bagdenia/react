const DOM = React.DOM;
const Img = (props) => (
  DOM.img(props)
);

ReactDOM.render(
  React.createElement(Img, 
 {src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg', 
  alt: 'hi me', width: 150, height: 100}),
  document.getElementById('pic_id')
)
