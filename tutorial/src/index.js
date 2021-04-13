import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';
import {books} from './books';
import SpecialBook from './Book';


function BookList() {
  return( 
    <React.Fragment>
      <section className="booklist">
        
        {books.map((book) => {
          return <SpecialBook key={book.id} {...book}> </SpecialBook>;
        })}

      </section>
    </React.Fragment>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));
