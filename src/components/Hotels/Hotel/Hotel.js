import React from 'react';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

function Hotel() {
  return (
    <div className={`card ${styles.Hotel}`}>
     <div className="card-body">
     <div className="row">
        <div className="col-4">
          <img 
          src={hotelImg}
          alt=""
          className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col">
              <p className="styles.title">Pensjonat</p>
              <span className="badge badge-light">Warszawa</span>
            </div>
            <div className="col text-right">
              <h5>Ocena: 8.3</h5>
              <a href="#" className="btn btn-primary mt-2 px-4">Pokaz</a>
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className="styles.description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem accusamus, quibusdam laborum laudantium ut illum dolore aliquid molestias iusto, aliquam dolores? Architecto sequi qui laudantium adipisci ducimus deleniti magnam accusamus.
          </p>
        </div>
      </div>
     </div>
    </div>
  )
}
export default Hotel;