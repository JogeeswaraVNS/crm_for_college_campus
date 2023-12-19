import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';


function AdminResultsSemester(props) {

  const [Data, setData] = useState([]);
  const api=`http://127.0.0.1:5000/get/admin/results/${props.Department}/${props.Semester}`
  console.log(api)

  useEffect(() => {
      axios.get(api)
      .then(r=>setData(r.data))
      // .then(console.log(Data))
      .catch(err=>console.log(err))
  }, [api])


  return (
    <div>


{
    Data.length===0?
    <div className='mx-auto mt-5'>
        <h2 className='text-danger'>Results are not Uploaded Yet</h2>
    </div>
    :

<div>

<h4 style={{display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-3 text-white my-4'>
{props.Department} Department Semester {props.Semester} Results
</h4>


    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <table style={{textAlign:'justify'}} className="table border-dark table-bordered table-hover table-responsive-sm">
      <thead className='table-dark'>
          <tr>
              <th style={{textAlign:'center'}}><h5 className='p-3'>Rollno</h5></th>
              <th><h5 className='p-3'>Name</h5></th>
              <th style={{textAlign:'center'}}><h5 className='p-3'>CGPA</h5></th>
          </tr>
      </thead>
      <tbody>

          {

              Data.map((d)=>(

                  <tr key={d.sno}>
                      <td style={{width:'15%',textAlign:'center'}} className='p-3'><h5>{d.rollno}</h5></td>
                      <td className='p-3'><h5>{d.name}</h5></td>
                      <td style={{width:'10%',textAlign:'center'}} className='p-3'><h5>{d.cgpa}</h5></td>
                  </tr>

                  
              ))
          }
      </tbody>
  </table>
  </div>

  </div>






}
    </div>
  )
}

export default AdminResultsSemester