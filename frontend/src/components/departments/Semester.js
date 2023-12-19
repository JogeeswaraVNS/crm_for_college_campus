import './Departmentsh1.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Semester(props) {

    const [Data, setData] = useState([]);
    const api=`http://127.0.0.1:5000/get/${props.Department}/${props.Semester}`
    console.log(api)

    useEffect(() => {
        axios.get(api)
        .then(r=>setData(r.data))
        .then(console.log(Data))
        .catch(err=>console.log(err))
    }, [api])

  return (
    <div className="container">

<h4 style={{display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-3 text-white my-4'>{props.Department} Syllabus Semester {props.Semester}</h4>

<table style={{textAlign:'left'}} className="table table-bordered table-hover mt-3 border-dark table-responsive-sm">

   <thead className='table-dark'>
        <tr>
             <th>
                <h6 className='p-2'>
                Subject Code
                </h6>
                </th>
             <th>
             <h6 className='p-2'>
                Subject Name
                </h6>
                </th>
             <th>
                <h6 className='p-2'>
                Lecture
                </h6>
                </th>
             <th>
                <h6 className='p-2'>
                Tutorial
                </h6>
                </th>
             <th>
                <h6 className='p-2'>
                Practical/Drawing
                </h6>
                </th>
             <th>
                <h6 className='p-2'>
                Contact Hours/Week
                </h6>
                </th>
             <th>
                <h6 className='p-2'>
                Credits
                </h6>
                </th>
         </tr>
     </thead>
     <tbody>
       {
            Data.map((d)=>(
                <tr key={d.sno}>
                    <td style={{width:'12%'}}>
                        <h6 className='p-2'>
                        {d.subject_code}
                        </h6>
                        </td>
                    <td style={{width:'30%'}}>
                        <h6 className='p-2'>
                        {d.subject_name}
                        </h6>
                        </td>
                    <td>
                        <h6 className='p-2'>
                        {d.lecture}
                        </h6>
                        </td>
                    <td>
                        <h6 className='p-2'>
                        {d.tutorial}
                        </h6>
                        </td>
                    <td>
                        <h6 className='p-2'>
                        {d.practical_drawing}
                        </h6>
                        </td>
                    <td>
                        <h6 className='p-2'>
                        {d.contact_hours_weekly}
                        </h6>
                        </td>
                    <td>
                        <h6 className='p-2'>
                        {d.subject_credits}
                        </h6>
                        </td>
                </tr>
            ))
        }
    </tbody>
</table>

</div>

  )
}

export default Semester