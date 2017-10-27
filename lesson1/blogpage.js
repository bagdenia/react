const DOM = React.DOM;

const posts = [
  { text: 'Bum1', src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'},
  { text: 'Bum2', src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'},
  { text: 'Bum3', src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg'}
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
  DOM.ul(
    {},
    _.map(
      items,
      (items, key) => (
        DOM.li( {key}, 
        React.createElement(BlogItem, {text: items.text, img: {src: items.src,
                                                                             width: 200,
                                                                             alt: `img${key}`
                                                                            } }))
      )
    )
  )
);

class BlogPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { posts };
  }
  
  render() {
    const{ posts } = this.state;
    return React.createElement(BlogList, {items: posts})
    }
}


ReactDOM.render(
 React.createElement(BlogPage),
  document.getElementById('first')
)






