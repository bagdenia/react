const DOM = React.DOM;
const Img = (props) => (
  DOM.img(props)
);

const TextBox = ({text}) => (
  DOM.span(
    null,
    text
  )
); 

const BlogItem = (props) => (
  DOM.div(
    null,
    [React.createElement(Img, 
       props.img ),
    React.createElement(TextBox, 
       {text: props.text})
    ]
  )
); 

ReactDOM.render(
 React.createElement(BlogItem, {text: 'Bugaga', img: { alt: 'Muhaha', height: 100, width: 150, 
 src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'} } ),
  document.getElementById('first')
)

ReactDOM.render(
 React.createElement(BlogItem, {text: 'Say anth else', img: { alt: 'Muhaha', height: 100, width: 150, 
 src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'} } ),
  document.getElementById('sec')
)

ReactDOM.render(
 React.createElement(BlogItem, {text: 'didl', img: { alt: 'Muhaha', height: 100, width: 150, 
 src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'} } ),
  document.getElementById('third')
)






