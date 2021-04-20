import React, { useState } from 'react';

const Tour = ({id, image, info, price, name}) => {
  const [readMore, setReadMore] = useState(false)


  return (
  <article className='single-tour'>
    <img src={image} alt={name}/>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className="tour-price">$ {price} </h4>
        <br/>
      </div>
      <p> {readMore ? info: `${info.substring(0,200)}...
      `} 
      <button onClick={()=> setReadMore(!readMore)}>
        {readMore ? 'Show Less' : 'Read more'}
      </button>
      </p>
      <button className="delete-btn">
        Maybe next time
      </button>
    </footer>
    </article>
    );
};

export default Tour;
