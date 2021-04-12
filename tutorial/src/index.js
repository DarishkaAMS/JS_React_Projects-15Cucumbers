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
        
        <Book/>

      </section>
    </React.Fragment>
  );
}

const author = "DarishkaAMS"
const Book = () => {
  const title = "Python Cookbook";
  return (
    <article className="book">
      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--FaVyk1l0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://images-na.ssl-images-amazon.com/images/I/51hFtDvqgfL._SX379_BO1%2C204%2C203%2C200_.jpg" alt="#" width="200" height="250"/>
      <h3>{author.toUpperCase()}</h3>
      <h4>{title}</h4>
    </article>
  );
};

// const Author = () => {
//   return <h4 style={{color: "#617d98", fontSize: '0.75rem', marginTop: '0.25rem'}}> I have written this book </h4>;
// };

// const Image = () => ();


ReactDom.render(<BookList/>, document.getElementById('root'));
