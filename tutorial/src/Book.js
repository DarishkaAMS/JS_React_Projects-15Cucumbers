import React from 'react'


const Book = ({image, title, author}) => {
  const clickHandler = () => {
    alert("Hello World");
  };
  const complexClickHandler = (author) => {
    console.log(author);
  };

  return (
    <article className="book" onMouseOver={()=>{
      console.log(author);
    }}>
      <img src={image} alt="#" width="200" height="250"/>
      <h3>{author}</h3>
      <h4 onClick={() => console.log(title)}>{title}</h4>
      <button type="button" onClick={clickHandler}>Click Me!</button>
      <button type="button" onClick={() => complexClickHandler(title)}>Title</button>
    </article>
  );
}

export default Book // only one could be exported