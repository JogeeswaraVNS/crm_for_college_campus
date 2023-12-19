import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DepartmentMessage(props) {

  let [Data,setData]=useState([]);

  let [Dept,setDept]=useState('')

  let [sort,setsort]=useState(false)

  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/get/${props.Rollno}/`).then(r=>setDept(r.data)).catch(err=>console.log(err))
    }
    ,[]);



    useEffect(()=>{
      axios.get(`http://127.0.0.1:5000/get/student/message/department/${Dept}/${sort}/`)
      .then(r=>setData(r.data))
      .catch(err=>console.log(err))
    },[Dept,sort])

  return (
    <div>
      

      <div className=''>


      <div style={{backgroundColor:'#82001a',marginRight:'auto'}} className='py-2 text-white my-4'>

<div className='row'>


<div className='col mt-2'>
          <h5 className=''>You have {Data.length} Messages</h5>


</div>

<div className='col mt-2'>


      <h5 className=''>Department Messages
      <svg xmlns="http://www.w3.org/2000/svg" className='ms-2 mb-1' fill='#ffc107'  height="25" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
</h5>
</div>


<div className='col mt-2'>
<input type='checkbox' checked={sort} id='check' label='Sort By Date&Time' onClick={()=>{
  setsort(!sort);
  }}/>
<label htmlFor="check" className="ms-1">
  <h5>
  Latest first
  </h5>
  </label>
</div>





</div>

</div>



      <h4 className='mb-4 mt-2 fw-semibold'>Viewing <span className='text-danger'>{Dept}</span> Department Messages posted by Admins</h4>



      {   

Data.length===0?
<div>
  <h4 className='department'>No Messages By Admins to your {Dept} Department.</h4>
</div>:


<div>
<table style={{textAlign:'justify'}} className="table table-bordered border-dark table-hover table-responsive-sm mt-4">
    <thead className='table-dark'>
        <tr>
        <th><h5 className='p-3'>Admin</h5></th>
        <th><h5 className='p-3'>Message</h5></th>
        <th style={{textAlign:'center'}}><h5 className='p-3'>Date&Time</h5></th>
        </tr>
    </thead>
    <tbody>
        {
            Data.map((d)=>(
                <tr key={d.id}>
                    <td className='p-3'><h5>{d.admin}</h5></td>
                    <td style={{width:'55%'}} className='p-3'><h5>{d.message}</h5></td>
                    <td style={{textAlign:'center',width:'30%'}} className='p-3'>
                    <div className='btn btn-dark mt-2 mb-2' ><h5>
              <svg xmlns="http://www.w3.org/2000/svg" height="25" style={{fill:'white'}} viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
              <span className='ms-2'>
                {d.date.split('T')[0]}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='ms-2 me-2' fill='white' height="25" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              {d.date.split('T')[1]}
              </h5></div>
              </td>
                </tr>
            ))
        }
    </tbody>
</table>
</div>
}


      
    </div>

    </div>
  )
}

export default DepartmentMessage