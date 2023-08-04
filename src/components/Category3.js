import { useState } from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchAppleNews } from '../redux/NewsSlice';
//import Image from 'react-bootstrap/Image';

function Home() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { Apple, loading, error } = useSelector((state) => state.Apple);

  useEffect(() => {
    // Fetch the news Apple when the component mounts
    dispatch( fetchAppleNews());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const filteredData = Apple.filter(article => {
    if (search === "") {
      return true; 
    } else {
      return article.title.toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <>
    <div className='topic'>
    <h2 className='neon' data-text="Neon" contenteditable>
          <span className='trending-text'>APPLE NEWS</span>
        </h2>
    </div>
    <div className=  'col-7'>
    <div>
          <form className="search-box">
            <input className='but' type="text" placeholder="....Search Here" onChange={(e) => setSearch(e.target.value)} />
            <button className='but' type="reset">Click</button>
          </form>
        </div>
      {filteredData.map((article) => (
        <div  className='inner' key={article.title}>
          <h3>{article.title}</h3>
          <p> by {article.author}</p>
            <p>{article.description}</p>
            <a href={article.url} className='url' rel="noopener noreferrer">Click Here To Read More</a>
          <div className='col-3'>
         <img src={article.urlToImage} alt={article.title} width='120px' height='120px' />
         </div>
        </div>
        
      ))}
    </div>
    </>
  );
}

export default Home;
