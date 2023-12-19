import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FacultyComponet(props) {

    let [Dep,setDept]=useState('')

    let deptapi=`http://127.0.0.1:5000/get/departments/${props.Dept}/`




    useEffect(()=>{
        axios.get(deptapi).then(r=>setDept(r.data)).catch(err=>console.log(err))
    },[deptapi])

    const [Data, setData] = useState([]);
    const api=`http://127.0.0.1:5000/get/faculty/${props.Department}/`
    // console.log(api)

    useEffect(() => {
        axios.get(api)
        .then(r=>setData(r.data))
        .then(console.log(Data))
        .catch(err=>console.log(err))
    }, [api])

  return (
    <div className='container'>


<h4 style={{display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-3 text-white my-4'>Faculty of {Dep}</h4>



<table style={{textAlign:'left'}} className="table table-bordered table-hover mt-4 border-dark table-responsive-sm">

   <thead className='table-dark'>
        <tr>
        <th>
            <h6 className='p-2'>
            Sno
            </h6>
            </th>
        <th>
            <h6 className='p-2'>
            Name of the Faculty
            </h6>
            </th>
             <th>
                <h6 className='p-2'>
                Designation
                </h6>
                </th>
             <th>
                <h6 className='p-2'>
                Date of Joining
                </h6>
                </th>
             <th>
                <h6 className='p-2'>
                Qualification
                </h6>
                </th>
             {/* <th>
                <h6 className='p-2'>
                Nature of Association
                </h6>
                </th> */}
             <th>
                <h6 className='p-2'>
                JNTUH ID
                </h6>
                </th>
         </tr>
     </thead>
     <tbody style={{textAlign:'left'}}>
       {
            Data.map((d,i)=>(
                <tr key={i}>
                    <td>
                    <h6 className='p-2'>
                        {i+1}
                        </h6>                        
                        </td>
                    <td>
                        <h6 className='p-2'>
                        {d.name}
                        </h6>
                        </td>
                    <td>
                        <h6 className='p-2'>
                        {d.designation}
                        </h6>
                        </td>
                    <td>
                        <h6 className='p-2'>
                        {d.doj}
                        </h6>
                        </td>
                    <td>
                        <h6 className='p-2'>
                        {d.qualification}
                        </h6>
                        </td>
                    {/* <td>
                        <h6 className='p-2'>
                        {d.noa}
                        </h6>
                        </td> */}
                    <td>
                        <h6 className='p-2'>
                        {d.jntuh_id}
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

export default FacultyComponet