import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AlumniProfile(props) {

  let [AlumniEvents,setAlumniEvents]=useState([])
  let [Alumni,setAlumni]=useState([])


  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/get/alumni/events/${props.AlumniID}/`)
      .then(r=>setAlumniEvents(r.data))
      .catch(error => console.log(error));


      axios.get(`http://127.0.0.1:5000/get/alumni/details/${props.AlumniID}/`)
      .then(r=>setAlumni(r.data))
      .catch(err=>console.log(err))


  },[])

  return (
    <div>
      

      <div>
<h4 className='mt-2'>Welcome to Your Alumni Profile, {props.AlumniID}</h4>

{Alumni.map((alumni, index) => (
<div style={{width:'70%',display:'block',margin:'auto'}} className='mt-4'>
      <div style={{backgroundColor:'#82001a'}} key={index} className="card text-white px-4 pt-3 mt-3">
        <h3 className="mb-3">{alumni.name}</h3>
        <p className="">
          <strong>Roll No :</strong> {alumni.rollno} | <strong>Department :</strong> {alumni.department} | <strong>Alumni ID :</strong> {alumni.username}
        </p>
        <p className="">
          <strong>Year of Join :</strong> {alumni.year_of_join} | <strong>Year of Pass:</strong> {alumni.year_of_pass} | <strong>Joined Date : </strong> {alumni.date.split('T')[0]} | <strong>Time : </strong> {alumni.date.split('T')[1]}
        </p>
        <p style={{textAlign:'justify'}}>
          <strong>Your Purpose :</strong> {alumni.state_your_purpose}
        </p>

      </div>
</div>
    ))}
</div>


{
  AlumniEvents.length===0?
  null:
  <div>


<div>
<h4 className='mt-4'>Events Organized by You</h4>

{AlumniEvents.map((alumni, index) => (
<div style={{width:'90%',display:'block',margin:'auto'}} className='mt-4'>
      <div  key={index} className="card bg-dark text-white px-4 pt-3 mt-3">
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
}



    </div>
  )
}

export default AlumniProfile