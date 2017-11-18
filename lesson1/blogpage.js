const { DOM, PropTypes } = React
const { bind } = _;

const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY';

function formatDate(date) {
  return moment(date).format(DEFAULT_DATE_FORMAT);
}

const staticItems = [
  { 
      id: 1,
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
      id: 3,   
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
     id: 7, 
     image: {
          src: 'https://pp.userapi.com/c405931/v405931356/39f/GWhaMm1iBVo.jpg',
          alt: 'hi kitty'
        },
     meta: {
         dateCreated: formatDate('2017-09-07')
        },
     text: 'Nice day for'
    }
 ];


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





const Like = ({ id, likes, addLike }) => {
  const handleClick = (e) => {
    addLike(id)
  }

  return (
    <div>
      <span>Count pop: { likes }</span>
      <button onClick={handleClick}>Like</button>
    </div>
  )
};

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number
};




const BlogItem = ({meta, image, text, addLike, id}) => (
  DOM.div(
    null,
    React.createElement(
      Meta, 
      meta),
    React.createElement(
      Image, 
      image),
    React.createElement(
      TextBox,
      null,
      text),
    React.createElement(
      Like, 
      { likes: meta.likes, addLike: addLike, id: id } )
  )
);
 

  const BlogList = ( { items, addLike } ) => (
    DOM.ul(
        {},
        _.map(
              items,
              (item) => (
                DOM.li( 
                  { key: item.id }, 
                  React.createElement(
                    BlogItem, 
                    { 
                    meta: item.meta,
                    image: item.image,
                    text: item.text,
                    addLike,
                    id: item.id 
                  })
                )
              )
            )
      )
  );

  class BlogPage extends React.Component {
    constructor(props){
        super(props);
        const items = _.each(staticItems, function(e){
          e.meta.likes ? e.meta.likes : e.meta.likes = 0; 
          e.meta.name ? e.meta.name : e.meta.name = 'Noname'; 
        });

        this.state = { posts: items };
        this.addLike = this.addLike.bind(this);  
      }
    
    addLike(id) {
       this.setState((prevState) => {
          const item = _.find(prevState.posts, ['id', id]);
          item.meta.likes+=1;
          return { posts: prevState.posts }
       });
    }
    
    render() {
      const pieColumns = _.map(staticItems, item => [item.meta.name, 
                                               item.meta.likes]);
      return(
      <div>  
        <BlogList items ={this.state.posts} addLike = {this.addLike} />
        <PieChart columns = { pieColumns } />
      </div>
      )
    }
  }

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: { 
        columns: this.props.columns,
        type : 'pie'
      }
    })
  } 

  componentWillReceiveProps() {
    this.chart.load({ columns: this.props.columns });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return(
      <div ref="chart" /> 
    );
  }
}  





  ReactDOM.render(
      <BlogPage />,
      document.getElementById('app')
  )

