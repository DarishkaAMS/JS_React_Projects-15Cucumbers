import React from 'react';
import Review from './Review';
import { FaCat } from 'react-icons/fa';


function App() {
  return (
  <main>
    <FaCat className="icon"/>
    <section className="container">
      <div className="title">
        <h2> Our Reviews </h2>
        <div className="underline">
          
        </div>
      </div>
      <Review/>
    </section>
  </main>
  );
}

export default App;
