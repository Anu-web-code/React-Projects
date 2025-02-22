import React, { useEffect, useState } from 'react';
import './Cricket.css';
const Cricket = () => {

    const [data,setData]=useState([]);
    const [inputData,setInputData]=useState();
    const [search,setSearch]=useState("");

    const getInfo=async ()=>{
const response=await fetch(`https://api.cricapi.com/v1/cricScore?apikey=1d1ef835-fbc8-4702-94b5-72f6dd55183c`);
const data=await response.json();
    console.log(data.data);    
    setData(data.data);
    }

useEffect(()=>{
    getInfo();
},[]);

const handleChange=(e)=>{
    setInputData(e.target.value);
}

const handleClick=()=>{
setSearch(inputData)
getInfo();
}

  return (
    <div className='main-container'>
        <div className="searchBar">
            <input type="text" placeholder='Search Matches' onChange={handleChange}/>
            <button className="btn btn-danger" onClick={handleClick}>Search</button>
        </div>
        <div className="heading my-3">
            <img src="https://www.pngall.com/wp-content/uploads/5/Red-Ball-PNG-Download-Image.png" alt=""  />
            <p>Live Cricket Score App</p>
        </div>
      <div className="container">

      {
        data && data.length>0?(
            data.map((currVal)=>
               {

if(currVal.status !== "Match not started")
{
   if(currVal.series.includes(search)|| currVal.t1.includes(search)||currVal.t2.includes(search))
   {
    return  <div className="card">
    <h5>{currVal.series}</h5>
    <h5>{currVal.matchType}</h5>
    <div className="img">
        <div>
            <img src={currVal.t1img} alt="" />
            <p>{currVal.t1}</p>
            <p>{currVal.t1s}</p>
        </div>
        <div className='my-2'>
            <img src={currVal.t2img} alt="" />
            <p>{currVal.t2}</p>
            <p>{currVal.t2s}</p>
        </div>
    </div>
    <div className="status">
    <h5>{currVal.status}</h5>
    </div>
    </div>
   }
   if(search===""){
    return  <div className="card">
    <h5>{currVal.series}</h5>
    <h5>{currVal.matchType}</h5>
    <div className="img">
        <div>
            <img src={currVal.t1img} alt="" />
            <p>{currVal.t1}</p>
            <p>{currVal.t1s}</p>
        </div>
        <div className='my-2'>
            <img src={currVal.t2img} alt="" />
            <p>{currVal.t2}</p>
            <p>{currVal.t2s}</p>
        </div>
    </div>
    <div className="status">
    <h5>{currVal.status}</h5>
    </div>
    </div>
   }
}
               }
            )
        ):
        <p>Data Not Found</p>
      }


      </div>
    </div>
  );
}

export default Cricket;
