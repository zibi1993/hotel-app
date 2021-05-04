import React, { Component } from 'react';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

class Hotels extends Component{
render(){
  return(
    <div>
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty:</h2>
      <Hotel/>
      <Hotel/>
    </div>
    </div>
  )
}

}
export default Hotels;
