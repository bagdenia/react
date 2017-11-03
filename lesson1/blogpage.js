const { DOM, PropTypes } = React;
const { bind } = _;

const formatDate = (date) => moment(date).format('DD-MM-YYYY')


const posts = [
  { 
   image: {
     src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg',
     alt: 'hi kitty'
   },
   meta: {
    name: 'Fedya', 
    likes: 4,
    dateCreated: formatDate('2017-10-02')
   }
  },
  { 
   image: {
     alt: 'hi kitty'
   },
   meta: {
    name: 'Vasya', 
    likes: 7,
    dateCreated: formatDate('2017-09-07')
   },
   text: 'Bye all'
  },
  { 
   image: {
     src: 'https://pp.userapi.com/c405931/v405931356/39f/GWhaMm1iBVo.jpg',
     alt: 'hi kitty'
   },
   meta: {
    name: 'MAsha', 
    dateCreated: formatDate('2017-09-07')
   },
   text: 'Nice day for'
  }
 ];


const Img = ({ src, height, width, alt }) => (
  DOM.img({ src, height, width, alt })
);

Img.defaultProps = {
  src: 'https://pp.userapi.com/c5641/u5790356/134714790/x_d1448a03.jpg',
  width: 200,
  alt: 'default alt'
};

Img.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
};

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

class Like extends React.Component {
  constructor(props){
   super(props);
   this.state = { likes: props.likes };
   this.handleLike = bind(this.processLike, this);
  }
  
  processLike(e){
   this.setState({ likes: this.state.likes + 1 });
  }
  
  render(){
   return(
    <div>
     <span>Count: { this.state.likes }</span>
     <button onClick={this.handleLike}>Like</button>
    </div>
   ) 
  }
  
};

Like.defaultProps = {
 likes: 0
 };

Like.propTypes = {
 likes: PropTypes.number
};



const BlogItem = (props) => (
  DOM.div(
    null,
    React.createElement(
       Meta, 
       props.meta),
    React.createElement(
       Img, 
       props.image),
    React.createElement(
       TextBox,
       null,                 
       props.text),
    React.createElement(
       Like, 
       props.meta)
  )
); 

const BlogList = ( { items } ) => (
  DOM.ul(
    {},
    _.map(
      items,
      (item, index) => (
        DOM.li( 
         { key: index }, 
         React.createElement(BlogItem, item)
        )
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
    return React.createElement(
      BlogList, 
      { items: posts }
    )
  }
}

ReactDOM.render(
 React.createElement(BlogPage),
  document.getElementById('app')
)
