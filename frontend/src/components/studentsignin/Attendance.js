import axios from 'axios';
import React, { useEffect, useState } from 'react'




function Attendance(props) {


  const [Data, setData] = useState("");



  useEffect(() => {
      axios.get(`http://127.0.0.1:5000/get/student/attendance/${props.Rollno}/`)
      .then(r=>setData(r.data))
      .catch(err=>console.log(err))

    
  
}, [])


  return (

    <div className='mt-5' style={{marginBottom:'5rem'}}>

      <h1 className='p-3 mb-4'>Your Attendance</h1>


    <div style={{display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center'}}>


    





{ (Data<75) &&
    <div style={{width:'15rem',height:'15rem',border:'1rem solid #dc3545',borderRadius:'50%',
    display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center'}} 
    className='bg-light'
        >

      <h1 className='text-danger display-1'>{Data}<span className='display-4'>%</span></h1>

    </div>
}

{ (Data>=75) &&
    <div style={{width:'15rem',height:'15rem',border:'1rem solid #198754',borderRadius:'50%',
    display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center'}} 
    className='bg-light'
        >

      <h1 className='text-success display-1'>{Data}<span className='display-4'>%</span></h1>

    </div>
}

    </div>
    </div>
  )
}

export default Attendance