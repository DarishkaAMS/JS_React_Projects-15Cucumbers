import React from 'react';
import ReactDom from 'react-dom';


// const Greeting = () => {
//   return React.createElement('h4', {}, 'Good Morning ^_^!')
// };


function BookList() {
  return( 
    <React.Fragment>
      <section>

        <h4>This is a BookList</h4>
        <Book/>

      </section>
    </React.Fragment>
  );
}

const Book = () => {
  return <article>
    This is my favourite book
  </article>;
};
// const Message = {} => 


ReactDom.render(<BookList/>, document.getElementById('root'));
