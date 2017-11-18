import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories'; 
import c3 from 'c3';

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

export default PieChart;

