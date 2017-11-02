const { DOM, PropTypes } = React;
const { bind } = _;

const posts = [
  { name: 'Fedya', src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg' },
  { count: 5, date_crtd: moment().add(-1, 'days').format('DD-MM-YYYY'), text: 'number' },
  { date_upd: moment().add(5, 'days').format('DD-MM-YYYY'), text: 'test', count: 12 }
 ];

const Img = ({src, height, width, alt, ind}) => (
  <img src = { src } height = { height } width = {width } alt = { alt ? alt + ind : `img${ ind }` } />
);

Img.defaultProps = {
  src: 'https://pp.userapi.com/c5641/u5790356/134714790/x_d1448a03.jpg',
  width: 200
};

Img.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
};

const TextBox = ({text}) => (
  DOM.span(
    null,
    text != 'test' ? text : 'SuperTest'
  )
); 

TextBox.defaultProps = {
  text: 'Bum'
};

TextBox.propTypes = {
  text: PropTypes.string
};

const Metax = ({name, date_crtd, date_upd}) => (
  DOM.p(
    null,
    `Created by ${ name } at ${ date_crtd }, last modified at ${ date_upd }`)
);

Metax.defaultProps = {
  name: 'Vasya',
  date_crtd: moment().format('DD-MM-YYYY'),
  date_upd: moment().add(3, 'days').format('DD-MM-YYYY')
};

Metax.propTypes = {
  name: PropTypes.string,
  date_crtd: PropTypes.string,
  date_upd: PropTypes.string
};

class Like extends React.Component {
  constructor(props){
   super(props);
   this.state = { count: props.count };
   this.handleLike = bind(this.processLike, this);
  }
  
  processLike(e){
   this.setState({ count: this.state.count + 1 });
  }
  
  render(){
   return(
    <div>
     <span>Count: {this.state.count}</span>
     <button onClick={ this.handleLike }> Like </button>
    </div>
   ) 
  }
  
};

Like.defaultProps = {
 count: 0
 };

Like.propTypes = {
  count: PropTypes.number
};



const BlogItem = (props) => (
  DOM.div(
    null,
    React.createElement(Metax, 
       props.meta),
    React.createElement(Img, 
       props.img ),
    React.createElement(TextBox, 
       {text: props.text}),
    React.createElement(Like, 
       props.meta)
    
 )
); 

const BlogList = ( { items } ) => (
  DOM.ul(
    {},
    _.map(
      items,
      (item, index) => (
        DOM.li( {key: index}, 
        React.createElement(BlogItem, {meta: { name: item.name, 
                                       date_crtd: item.date_crtd,
                                       date_upd: item.date_upd, count: item.count}, 
                                       text: item.text, img: {src: item.src,
                                       width: item.width,
                                       alt: item.alt, ind: `${index}`
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
  document.getElementById('app')
)
