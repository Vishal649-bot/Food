import React, { useEffect, useState } from 'react'
import bgImg from '../assets/bg.png'
import './Main.css'

export const BASE_URL = "http://localhost:3000";

const Main = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchBook =async()=>{
        try {
            const res = await fetch(BASE_URL)
            const json = await res.json();
            setData(json)

        } catch (error) {
            setError('unable to fetch')
        }
      }
      fetchBook()
      console.log(data);
      
    }, [])
    
  return (
    <div className='main-div'>
      {/* <img src={bgImg} alt="" /> */}
      {error && <p>{error}</p>}
      <div className='food-grid'>
      {
        data.length>0?(
            data.map((ele,idx)=>{
                return (
                    <div key={idx} className='cards-grid'>
                        <div className='card'>
                            <img src={`${BASE_URL}${ele.image}`} alt="Food" />
                            <h1>{ele.name}</h1>
                            <h3>{ele.text}</h3>
                            <button>{ele.price}</button>
                        </div>
                    </div>
                );
            })
    ):(
        <p>Loading...</p>
    )
      }
</div>
    </div>
  )
}

export default Main
