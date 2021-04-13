import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css'

// Setup vars
const firstBook = {
  image: "https://res.cloudinary.com/practicaldev/image/fetch/s--FaVyk1l0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://images-na.ssl-images-amazon.com/images/I/51hFtDvqgfL._SX379_BO1%2C204%2C203%2C200_.jpg",
  title: "Python Cookbook",
  author: "DarishkaAMS"
}

const secondBook = {
  image: "https://images-na.ssl-images-amazon.com/images/I/71oUHJ6uO7L.jpg",
  title: "JS: The Definitive Guide",
  author: "DarishkaAMS"
}

function BookList() {
  return( 
    <React.Fragment>
      <section className="booklist">
        
        <Book image={firstBook.image} title={firstBook.title} author={firstBook.author}>
          <p>Lorem ipsum </p>
          <h5>Lalala</h5>
        </Book>

        <Book image={secondBook.image} title={secondBook.title} author={secondBook.author}/>

      </section>
    </React.Fragment>
  );
}


const Book = ({image, title, author, children}) => {
  // const {image, title, author} = props
  return (
    <article className="book">
      <img src={image} alt="#" width="200" height="250"/>
      <h3>{author}</h3>
      <h4>{title}</h4>
      {children}
    </article>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));
