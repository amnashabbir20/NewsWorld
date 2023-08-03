import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{display: 'flex', gap: '15px',Color:'lightblue',
color:'darkblue',border: '2px solid darkblue',
borderRadius: '10px',padding:'5px 5px 5px 5px'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/newsdetail"} className="nav-link">NewsDetail</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/category1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a href="/category1" className="dropdown-item">Bitcoin</a>
                  </li>
                  <li className="nav-item">
                    <a href="/category2" className="dropdown-item">Tech</a>
                  </li>
                  <li className="nav-item">
                    <a href="/category3" className="dropdown-item">Apple</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
