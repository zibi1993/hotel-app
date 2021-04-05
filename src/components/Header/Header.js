import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import styles from './Header.module.css'

function Header() {
  return(
    <div >
      <header className={`container ${styles.header}`}>
      <SearchBar/>
      </header>
    </div>
  )
}
export default Header;