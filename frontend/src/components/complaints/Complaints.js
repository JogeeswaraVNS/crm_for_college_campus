import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
function Complaints(props) {

  let [Data,SetData]=useState({
    rollno:'',
    department:'',
    body:''
})

  let api=`http://127.0.0.1:5000/get/${props.Rollno}/`

  useEffect(()=>{
    axios.get(api).then(r=>SetData({department:r.data}))
  },[api])

  //useForm hook
  const {register, handleSubmit,formState:{errors}} = useForm();

   let submitComplaint =(complaintobj)=>{
    console.log("Submitted Complaint: ",complaintobj.complaints)
    SetData({rollno:props.Rollno,body:complaintobj.complaints})
    console.log(Data)
    axios.post('http://127.0.0.1:5000/student/complaint',Data).then(r=>console.log(r.data)).catch(err=>console.log(err))
   }

  return (
    <div className='container mx-auto mt-5'>
      <h2>Want to improve campus experience?</h2>
      <h3 className='mb-5'>Drop your suggestions here</h3>
      <form onSubmit={handleSubmit(submitComplaint)}>
        <textarea 
            className="form-control w-50 mx-auto" 
            id="complaints" cols="10" rows="5" placeholder='Write a complaint'
            {...register("complaints",{required:true})}>
        </textarea>
        {/* validation error textarea*/}
        {errors.complaints?.type=="required" && <p className="text-danger fw-semibold">*Complaint required to submit</p>}
        <div className="form-group">
            <button className="btn mt-4 btn-warning" type="submit">Post Complaint</button>
        </div>
      </form>
    </div>
  )
}

export default Complaints
