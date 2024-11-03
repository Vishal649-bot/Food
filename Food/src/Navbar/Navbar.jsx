import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-foody'>
        <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>
        <input type="text" placeholder='Search Food....' />
      </div>
      <div className='nav-btn'>
       
        {
          ['All','Breakfast','Lunch','Dinner'].map((ele)=>{
            return <button key={ele}>{ele}</button>
          })
        }
      </div>
    </div>
  )
}

export default Navbar
