import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css'

// Setup vars
const books = [
  { 
    id:1,
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--FaVyk1l0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://images-na.ssl-images-amazon.com/images/I/51hFtDvqgfL._SX379_BO1%2C204%2C203%2C200_.jpg",
    title: "Python Cookbook",
    author: "DarishkaAMS",
  },
  { 
    id:2,
    image: "https://images-na.ssl-images-amazon.com/images/I/71oUHJ6uO7L.jpg",
    title: "JS: The Definitive Guide",
    author: "DarishkaAMS",
  },
  { 
    id:3,
    image: "https://hackr.io/blog/uploads/images/lightweight-django.jpg",
    title: "Lightweight Django",
    author: "DarishkaAMS",
  },
];

function BookList() {
  return( 
    <React.Fragment>
      <section className="booklist">
        
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}

      </section>
    </React.Fragment>
  );
}


const Book = ({image, title, author}) => {
  const clickHandler = () => {
    alert("Hello World");
  };
  const complexClickHandler = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={image} alt="#" width="200" height="250"/>
      <h3>{author}</h3>
      <h4 onClick={() => console.log(title)}>{title}</h4>
      <button type="button" onClick={clickHandler}>Click Me!</button>
      <button type="button" onClick={() => complexClickHandler(author)}>Author</button>
    </article>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));
