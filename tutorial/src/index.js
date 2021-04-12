import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

// const Greeting = () => {
//   return React.createElement('h4', {}, 'Good Morning ^_^!')
// };


function BookList() {
  return( 
    <React.Fragment>
      <section>

        <h4>This is a BookList</h4>
        <Book/>
        <Book/>

      </section>
    </React.Fragment>
  );
}

const Book = () => {
  return <article>
    This is my favourite book
      <Author/> 
      <br/>
      <Image/>
  </article>;
};

const Author = () => {
  return <b> I have written this book </b>;
};

const Image = () => <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--FaVyk1l0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://images-na.ssl-images-amazon.com/images/I/51hFtDvqgfL._SX379_BO1%2C204%2C203%2C200_.jpg" alt="#"/>;


ReactDom.render(<BookList/>, document.getElementById('root'));
