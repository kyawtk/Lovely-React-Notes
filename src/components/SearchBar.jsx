import React from 'react'
import { useState } from 'react'
import '../styles/SearchBar.scss'
import {MdSearch} from 'react-icons/md'
const SearchBar = ({handleSearch, searchText}) => {
   
  return (
        <div className="searchBar-container">
          <MdSearch className='search-icon'></MdSearch>
        <input type="text" value={searchText} className='searchBar' placeholder='Search Notes'  onChange={handleSearch}/>
  </div>
  )
}

export default SearchBar