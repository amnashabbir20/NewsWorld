
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
        <div  className='inner' key={article.title}>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <p>{article.description}</p>
          <url>{article.url}</url>
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
