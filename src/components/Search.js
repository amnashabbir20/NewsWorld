import React from 'react'
//import './Searchbar.css';

const Search = () => {
  return (
    <div>
      <form className="search-box">
        <input  className='but' type="text" placeholder="....Search Here"/>
        <button className='but' type="reset">Click</button>
      </form>
    </div>
  )
}

export default Search
