import React from 'react'
import * as styles from './Header.module.css'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div>
      <div class={styles.searchBar}>
        <FaSearch color='black' />
        <input
          class='outline-none h-10 w-50 pl-3 text-lg text-gray-500'
          type='search'
          name='search'
          placeholder='Search Coupons'
          autocomplete='off'
        />
      </div>
    </div>
  )
}

export default SearchBar
