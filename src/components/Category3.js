
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchAppleNews } from '../redux/NewsSlice';
//import Image from 'react-bootstrap/Image';

function Home() {
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

  return (
    <>
    <div className='topic'>
      <h2>Apple News</h2>
    </div>
    <div className=  'col-7'>
      {/* Display the fetched news Apple */}
      {Apple.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <h3>{article.author}</h3>
          <p>{article.description}</p>
          <url>{article.url}</url>
          <div className='col-3'>
         <img src={article.urlToImage} alt={article.title} width='200px' height='200px' />
         </div>
        </div>
        
      ))}
    </div>
    </>
  );
}

export default Home;
