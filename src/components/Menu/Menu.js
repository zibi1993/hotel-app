import React from 'react';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div>
  <div className={`${styles.menuContainer} container`}>
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <a href='#'>Home</a>
      </li>
    </ul>
  </div>
  </div>
  )
}
export default Menu;