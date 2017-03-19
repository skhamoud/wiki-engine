import React from 'react';
import { Link } from "react-router-dom";
import btn from "../assets/search-btn.svg"

export default function SearchButton(props) {
  return (
    <Link to={'/search'} >
      <div className='btn search-btn search-btn_home' >
        <img src={btn} alt="searchButton"  />
      </div>
    </Link>);
}