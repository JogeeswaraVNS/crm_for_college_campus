import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AlumniData() {


  let [AlumniApplications,setAlumniApplications]=useState([])
  let [Alumni,setAlumni]=useState([])


  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/get/alumniapplication`)
    .then(r=>setAlumniApplications(r.data))
    .catch(err=>console.log(err))


    axios.get(`http://127.0.0.1:5000/get/alumni`)
    .then(r=>setAlumni(r.data))
    .catch(err=>console.log(err))


  },[])


  return (
    <div>

<div >

<h3 className='mb-3'>Our Alumni</h3>

    <div className='row'>


{Alumni.map((alumni, index) => (
<div className='col-6'>
      <div key={index} className="card px-4 pt-3 mt-3">
        <h3 className="mb-3">{alumni.name}</h3>
        <p className="">
          <strong>Roll No :</strong> {alumni.rollno} | <strong>Department :</strong> {alumni.department}
        </p>
        <p className="">
          <strong>Year of Join :</strong> {alumni.year_of_join} | <strong>Year of Pass:</strong> {alumni.year_of_pass}
        </p>
        <p className="">
          <strong>Alumni ID :</strong> {alumni.username}
        </p>
        <p>
        <strong>Joined Date : </strong> {alumni.date.split('T')[0]} | <strong>Time : </strong> {alumni.date.split('T')[1]}
        </p>
        <p style={{textAlign:'justify'}}>
          <strong>Purpose :</strong> {alumni.state_your_purpose}
        </p>

      </div>
</div>
    ))}

</div>
</div>

<div >

  <h3 className='mb-3 mt-4'>Alumni Applications Under Consideration</h3>

      <div className='row'>


{AlumniApplications.map((alumni, index) => (
<div className='col-6'>
        <div key={index} className="card px-4 pt-3 mt-3">
          <h3 className="mb-3">{alumni.name}</h3>
          <p className="">
            <strong>Roll No :</strong> {alumni.rollno} | <strong>Department :</strong> {alumni.department}
          </p>
          <p className="">
            <strong>Year of Join :</strong> {alumni.year_of_join} | <strong>Year of Pass:</strong> {alumni.year_of_pass}
          </p>
          <p className="">
            <strong>Alumni ID :</strong> {alumni.username}
          </p>
          <p>
          <strong>Applied Date : </strong> {alumni.date.split('T')[0]} | <strong>Time : </strong> {alumni.date.split('T')[1]}
          </p>
          <p style={{textAlign:'justify'}}>
            <strong>Purpose :</strong> {alumni.state_your_purpose}
          </p>

        </div>
</div>
      ))}

</div>
</div>

    </div>
  )
}

export default AlumniData