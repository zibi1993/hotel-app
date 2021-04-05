import React from 'react'

function SearchBar() {
  return (
 <div className="d-flex">
 
    <input 
    className="form-control"
    type='text' 
    placeholder='szukaj'
    />
   <button
    className="ml-1 btn btn-secondary">Szukaj</button>
 </div>
  )
}
export default SearchBar;