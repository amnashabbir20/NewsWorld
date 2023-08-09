import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromAPI } from '../redux/NewsSlice';
//import Image from 'react-bootstrap/Image';

function Home() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    // Fetch the news data when the component mounts
    dispatch(fetchDataFromAPI());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredData = data.filter(article => {
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
          <span className='trending-text'>TRENDING NEWS</span>
        </h2>
      </div>
      <div class="gradient"></div>
      <div class="spotlight"></div>
      <div className='col-7'>
        <div>
          <form className="search-box">
            <input className='but' type="text" placeholder="....Search Here" onChange={(e) => setSearch(e.target.value)} />
            <button className='but' type="reset">Click</button>
          </form>
        </div>
        {filteredData.map((article) => (
          <div className='inner' key={article.title}>
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
