import React from 'react';
import ReactDom from 'react-dom';


// const Greeting = () => {
//   return React.createElement('h4', {}, 'Good Morning ^_^!')
// };


function Greeting() {
  return( 
    <div>
      <h4>Good Morning ^_^!</h4>
    </div>
  );
}

ReactDom.render(<Greeting/>, document.getElementById('root'));
