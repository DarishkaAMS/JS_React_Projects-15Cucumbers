import React from 'react';
import ReactDom from 'react-dom';


// const Greeting = () => {
//   return React.createElement('h4', {}, 'Good Morning ^_^!')
// };


function Greeting() {
  return( 
    <React.Fragment>
      <div>
        <Person/>
        <h4>Good Morning ^_^!</h4>
      </div>
    </React.Fragment>
  );
}

const Person = () => <h2> Daryna </h2>


ReactDom.render(<Greeting/>, document.getElementById('root'));
