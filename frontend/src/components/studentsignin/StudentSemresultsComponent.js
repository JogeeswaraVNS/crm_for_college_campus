import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';



function StudentResultsComponent(props) {

    const [Data, setData] = useState([]);
    const [CGPA, setCGPA] = useState('');
  const api=`http://127.0.0.1:5000/get/results/${props.Department}/${props.Rollno}/${props.Semester}`
  console.log(api)

  useEffect(() => {
      axios.get(api)
      .then(r=>setData(r.data))
      // .then(console.log(Data))
      .catch(err=>console.log(err))

      axios.get(`http://127.0.0.1:5000/get/admin/results/${props.Department}/${props.Rollno}/${props.Semester}`)
      .then(r=>setCGPA(r.data))
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



    <div className=''>


<h4 style={{display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-3 text-white my-4'>
        Your CGPA in Semester {props.Semester}  is  {CGPA}
        </h4>




<div>
  <table style={{textAlign:'justify'}} className="table table-bordered border-dark table-hover table-responsive-sm mt-4">
      <thead className='table-dark'>
          <tr>
              <th style={{width:'20%'}}><h5 className='p-3'>Subject Code</h5></th>
              <th><h5 className='p-3'>Subject Name</h5></th>
              <th style={{width:'12%',textAlign:'center'}}><h5 className='p-3'>Points</h5></th>
              <th style={{width:'12%',textAlign:'center'}}><h5 className='p-3'>Credits</h5></th>
          </tr>
      </thead>
      <tbody>

          {

              Data.map((d)=>(

                  <tr key={d.sno}>
                      <td style={{width:'20%'}} className='p-3'><h5>{d.subject_code}</h5></td>
                      <td className='p-3'><h5>{d.subject_name}</h5></td>
                      <td style={{width:'12%',textAlign:'center'}} className='p-3'><h5>{d.points}</h5></td>
                      <td style={{width:'12%',textAlign:'center'}} className='p-3'><h5>{d.credits}</h5></td>
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

export default StudentResultsComponent