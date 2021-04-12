import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

// const Greeting = () => {
//   return React.createElement('h4', {}, 'Good Morning ^_^!')
// };


function BookList() {
  return( 
    <React.Fragment>
      <section className="booklist">

        <h4>This is a BookList</h4>
        <Book/>
        <Book/>
        <Book/>

      </section>
    </React.Fragment>
  );
}

const Book = () => {
  return <article className="book">
    This is my favourite book
      <Author/> 
      <br/>
      <Image/>
  </article>;
};

const Author = () => {
  return <h4 style={{color: "#617d98", fontSize: '0.75rem', marginTop: '0.25rem'}}> I have written this book </h4>;
};

const Image = () => <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--FaVyk1l0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://images-na.ssl-images-amazon.com/images/I/51hFtDvqgfL._SX379_BO1%2C204%2C203%2C200_.jpg" alt="#" width="200" height="250"/>;


ReactDom.render(<BookList/>, document.getElementById('root'));
