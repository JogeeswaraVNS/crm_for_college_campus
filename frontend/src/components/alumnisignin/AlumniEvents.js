import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AlumniEvents() {
    let [AlumniEvents,setAlumniEvents]=useState([])


    useEffect(()=>{
      axios.get(`http://127.0.0.1:5000/get/alumnievents`)
        .then(r=>setAlumniEvents(r.data))
        .catch(error => console.log(error));
  
    },[])


  return (
    <div style={{marginTop:'-1.75rem'}}>
        
        <div>
<h4 className='mt-4'>Events Organized by Our Alumni</h4>

{AlumniEvents.map((alumni, index) => (
<div style={{width:'90%',display:'block',margin:'auto',textAlign:'justify'}} className='mt-4'>
      <div  key={index} className="card px-4 pt-3 mt-3">
        <h3 className="mb-3">{alumni.title}</h3>
        <p className="">
          <strong>Date :</strong> {alumni.date} | <strong>Time :</strong> {alumni.time < 12 && `${alumni.time}AM`}{alumni.time >= 12 && `${alumni.time}PM`} | <strong>Venue :</strong> {alumni.venue} | <strong>Contact No :</strong> {alumni.phone_no} | <strong>Email :</strong> {alumni.email}
        </p>
        <p style={{textAlign:'justify'}}>
          <strong>Event Description :</strong> {alumni.description}
        </p>

      </div>
</div>
    ))}
</div>

    </div>
  )
}

export default AlumniEvents