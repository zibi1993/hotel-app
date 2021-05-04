import React,{ useState } from 'react'

function SearchBar() {
  const [term, setTerm] = useState('');
  const searchHandler = () =>{
    console.log('szukaj', term);
  }
 const keyHandler = (e)=>{
   if( e.key === 'Enter'){
     searchHandler()
   }
 }
  return (
    <div>
    <div className="d-flex">
    <input 
    className="form-control"
    value={term}
    onKeyDown={keyHandler}
    onChange={e => setTerm(e.target.value)}
    type="text"
    placeholder="szukaj"
    />

   <button
    className="ml-1 btn btn-secondary"
    onClick={searchHandler}
    >Szukaj</button>
    </div>
  </div>
  )
}
export default SearchBar;