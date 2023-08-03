
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsNews } from '../redux/NewsSlice';
//import Image from 'react-bootstrap/Image';

function Category2() {
  const dispatch = useDispatch();
  const { usNews, loading, error } = useSelector((state) => state.usNews);

  useEffect(() => {
    // Fetch the news data when the component mounts
    dispatch(fetchUsNews ());
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
      <h2>TECH</h2>
    </div>
    <div className=  'col-7'>
      {/* Display the fetched news data */}
      {usNews.map((article) => (
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

export default Category2;
