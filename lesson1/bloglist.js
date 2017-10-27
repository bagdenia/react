const DOM = React.DOM;

const posts = [
  { text: 'Bum1', key: 1, src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'},
  { text: 'Bum2', key: 2, src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'},
  { text: 'Bum3', key: 3, src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'}
 ];

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

const BlogList = ( { items } ) => (
  DOM.div(
    {},
    _.map(
      items,
      (items, key) => (
        React.createElement(BlogItem, {text: items.text, key: items.key, img: {src: items.src,
                                                                             width: 200,
                                                                             alt: `img${items.key}`
                                                                            } })
      )
    )
  )
);


ReactDOM.render(
 React.createElement(BlogList, { items: posts }),
  document.getElementById('first')
)






