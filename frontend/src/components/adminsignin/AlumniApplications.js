import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';


function AlumniApplications() {

  let [Data,setData]=useState([])
  
  let [showacceptmodal,setshowacceptmodal]=useState(false)
  let [showrejectmodal,setshowrejectmodal]=useState(false)
  
  let [name,setname]=useState('')
  let [acceptrollno,setacceptrollno]=useState({rollno:''})
  let [dept,setdept]=useState('')
  
  
  let [rejectrollno,setrejectrollno]=useState({rollno:''})
  let [rejectname,setrejectname]=useState('')
  let [rejectdept,setrejectdept]=useState('')


  function PostAcceptedApplicatant(event){
    axios.put(`http://127.0.0.1:5000/alumni/acceptapplication`,acceptrollno)
    .then(r=>console.log(r.data))
    .catch(err=>console.log(err))
    setshowacceptmodal(false)
    window.location.reload()
  }


  function PostRejectedApplicatant(event){
    axios.put(`http://127.0.0.1:5000/alumni/rejectapplication`,rejectrollno)
    .then(r=>console.log(r.data))
    .catch(err=>console.log(err))
    setshowrejectmodal(false)
    window.location.reload()
  }

  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/get/alumniapplication`)
    .then(r=>setData(r.data))
    .catch(err=>console.log(err))
  },[])


  return (
    <div className='px-5'>


<Modal 
            show={showacceptmodal}
            backdrop="static"
            centered
            className='modal-lg'>

                    <div style={{display:'flex',justifyContent:'space-around'}}>


<div style={{marginRight:'auto'}}>
<ModalTitle className='ps-3 pt-3'>
                        Do You Really Want to Accept the Applicant

                </ModalTitle>
</div>
                        
                        <div style={{display:'flex',justifyContent:'flex-end'}}>
                <button className='btn-close pt-5 pe-5' type='button' onClick={()=>setshowacceptmodal(false)}>
                
                </button>
                        </div>

                        </div>

            <ModalBody style={{marginTop:'-0.5rem'}}>

            <h4>Name : {name}</h4>
            <h4>Roll No : {acceptrollno.rollno}</h4>
            <h4>Department : {dept}</h4>



              </ModalBody>


<ModalFooter>


    <div>  

        <button className='btn btn-danger mb-3 me-3' onClick={()=>setshowacceptmodal(false)}>
<svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <h6 className='d-inline ms-2'>Cancel</h6>
        </button>

      <button className='btn btn-success mb-3' onClick={PostAcceptedApplicatant}>
<svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <h6 className='d-inline ms-2'>Accept</h6>
        </button>

   </div>

</ModalFooter>


        </Modal>



        <Modal 
            show={showrejectmodal}
            backdrop="static"
            centered
            className='modal-lg'>

                    <div style={{display:'flex',justifyContent:'space-around'}}>


<div style={{marginRight:'auto'}}>
<ModalTitle className='ps-3 pt-3'>
                        Do You Really Want to Reject the Applicant

                </ModalTitle>
</div>
                        
                        <div style={{display:'flex',justifyContent:'flex-end'}}>
                <button className='btn-close pt-5 pe-5' type='button' onClick={()=>setshowrejectmodal(false)}>
                
                </button>
                        </div>

                        </div>

            <ModalBody style={{marginTop:'-0.5rem'}}>

            <h4>Name : {rejectname}</h4>
            <h4>Roll No : {rejectrollno.rollno}</h4>
            <h4>Department : {rejectdept}</h4>



              </ModalBody>


<ModalFooter>


    <div>  

        <button className='btn btn-success mb-3 me-3' onClick={()=>setshowrejectmodal(false)}>
<svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <h6 className='d-inline ms-2'>Cancel</h6>
        </button>

      <button className='btn btn-danger mb-3' onClick={PostRejectedApplicatant}>
<svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <h6 className='d-inline ms-2'>Reject</h6>
        </button>

   </div>

</ModalFooter>


        </Modal>


      <div>

<h2>Alumni Applications</h2>

<div className='row'>


{Data.map((alumni, index) => (
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
          <strong>Date : </strong> {alumni.date.split('T')[0]} | <strong>Time : </strong> {alumni.date.split('T')[1]}
          </p>
          <p style={{textAlign:'justify'}}>
            <strong>Purpose :</strong> {alumni.state_your_purpose}
          </p>

          <div className='mb-4'>

          <button className='btn' onClick={()=>{
  setshowrejectmodal(true)
  setrejectname(alumni.name)
  setrejectdept(alumni.department)
  setrejectrollno({rollno:alumni.rollno})
  }}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{fill:'#dc3545'}} height="40" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
</button>

<button className='btn' onClick={()=>{
  setshowacceptmodal(true)
  setname(alumni.name)
  setdept(alumni.department)
  setacceptrollno({rollno:alumni.rollno})
  }}>
          <svg xmlns="http://www.w3.org/2000/svg" className='' style={{fill:'#198754'}} height="40"  viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
</button>

          </div>
        </div>
</div>
      ))}


</div>

      </div>
      



    </div>
  )
}

export default AlumniApplications