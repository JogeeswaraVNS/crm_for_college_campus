import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AdminMIDSemester(props) {
        

    const [Data, setData] = useState([]);
    const api=`http://127.0.0.1:5000/get/mid/${props.Department}/${props.Semester}`
    console.log(api)

    useEffect(() => {
        axios.get(api)
        .then(r=>setData(r.data))
        .catch(err=>console.log(err))



    }, [api])



  return (
    <div className=''>


{
    Data.length===0?
    <div className='mx-auto mt-5'>
        <h2 className='text-danger'>Midmarks are not Uploaded Yet</h2>
    </div>
    :


    <div>


<h4 style={{display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-3 text-white my-4'>
{props.Department} Department Semester {props.Semester} Midmarks
</h4>



<table style={{textAlign:'justify'}} className="table table-bordered border-dark table-hover table-responsive-sm">
      <thead className='table-dark'>
        <tr>
        <th  className='p-3'><h6>Subject Code</h6></th>
        <th  className='p-3'><h6>Subject Name</h6></th>

                    </tr>
      </thead>
      <tbody>

                        {
              [...Array(Data.length/30)].map((doing,idx)=>(
                  <tr key={idx} className='p-3'>
                    <td style={{width:'30%'}} className='p-3'>

                                <h6>
                                {Data[idx].subject_code}
                                    </h6>
                        
                    </td>
                    <td className='p-3'>
                                  <h6>
                                  {Data[idx].subject_name}
                                      </h6>
                        
                    </td>
                                  </tr>
                      ))
                    }



      </tbody>
  </table>


<div>
  <table style={{textAlign:'justify'}} className="table table-bordered border-dark table-hover table-responsive-sm mt-4">
      <thead className='table-dark'>
        <tr>
        <th  className='p-3'><h6>Rollno</h6></th>
          {
              [...Array(Data.length/30)].map((doing,idx)=>(
                  <th key={idx} className='p-3'>
                                <h6>
                                {Data[idx].subject_code}
                                    </h6>
                                </th>
                      ))
                    }
                    </tr>
      </thead>
      <tbody>


            {
                

              Data.map((d,i)=>(

                parseInt(i%(Data.length/30))==0?(
                      <tr key={d.sno}>
                        <td className='p-3'><h6>{d.rollno}</h6></td>
                      {
                          [...Array(Data.length/30)].map((doing,idx)=>(
                            <td key={idx} className='p-3'>
                                    <h6>
                                {Data[i+idx].marks}
                                </h6>
                                </td>
                      ))
                    }
                    </tr>
                ):null
                  
              ))
          }
      </tbody>
  </table>
  </div>


    </div>



//     <div className='p-5'>
//               <Card className="mx-auto border-dark pe-4 ps-4">
// <Card.Body>
//   <Card.Title><h2 className='text-danger mt-2'></h2></Card.Title>
//   <Card.Text>







//   </Card.Text>
// </Card.Body>
// </Card>
//     </div>



}
    </div>
  )
}

export default AdminMIDSemester