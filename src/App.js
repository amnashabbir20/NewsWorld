
import React from 'react'
import './components/Searchbar.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Category1 from './components/Category1';
import NewsDetail from './components/Newsdetail';
import Category2 from './components/Category2';
import Category3 from './components/Category3';
import Search from './components/Search';
function App() {
  return (
    <>
    
    <div className="App">
      <Router>
        <Navbar />
        <Search />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/newsdetail' element={<NewsDetail />} />
          <Route path='/category1' element={<Category1 />} />
          <Route path='/category2' element={<Category2 />} />
          <Route path='/category3' element={<Category3 />} />
        </Routes>
      </Router>
   
    </div>
    </>
  );
 
}


export default App;
