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
        <Author/>
        <Image/>

      </section>
    </React.Fragment>
  );
}

const Book = () => {
  return <article>
    This is my favourite book
  </article>;
};

const Author = () => {
  return <b> I have written this book </b>;
};

const Image = () => <img src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001976/img/basic/a0001976_main.jpg?20210118175750&q=80&rw=750&rh=536" alt="#"/>;


ReactDom.render(<BookList/>, document.getElementById('root'));
