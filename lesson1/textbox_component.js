const TextBox = ({text}) => (
  DOM.span(
    null,
    text
  )
); 

ReactDOM.render(
  React.createElement(TextBox, 
 {text: 'Some text'}),
  document.getElementById('text_id')
)
