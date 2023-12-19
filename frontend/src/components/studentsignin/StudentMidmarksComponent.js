import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';



function StudentMidmarksComponent(props) {

    const [Data, setData] = useState([]);
  const api=`http://127.0.0.1:5000/get/mid/${props.Department}/${props.Rollno}/${props.Semester}`
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
        <h2 className='text-danger'>Mid Marks are not Uploaded Yet</h2>
    </div>
    :



    <div className='px-2'>

<h4 style={{display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-3 text-white my-4'>
                    Your Mid Marks in Semester {props.Semester}
                    </h4>


    <div>
  <table style={{textAlign:'justify'}} className="table border-dark table-bordered table-hover table-responsive-sm mt-2">
      <thead className='table-dark'>
          <tr>
              <th><h5 className='p-3'>Subject Code</h5></th>
              <th><h5 style={{width:'70%'}} className='p-3'>Subject Name</h5></th>
              <th><h5 style={{textAlign:'center'}} className='p-3'>Marks</h5></th>
          </tr>
      </thead>
      <tbody>

          {

              Data.map((d)=>(

                  <tr key={d.sno}>
                      <td className='p-3'><h5>{d.subject_code}</h5></td>
                      <td style={{width:'70%'}} className='p-3'><h5>{d.subject_name}</h5></td>
                      <td style={{textAlign:'center'}} className='p-3'><h5>{d.marks}</h5></td>
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

export default StudentMidmarksComponent