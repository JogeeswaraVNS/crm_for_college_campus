import React from 'react'
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import axios from 'axios';

function Mycomplaints(props) {


  let [show,setshow] = useState(false);

  let [sort,setsort]=useState(false)

  let [showreply,setshowreply] = useState(false);

  let [DeleteComplaint,setDeleteComplaint] = useState(false);

  let [Complaint,setComplaint]=useState({
    Body:'',
    Res:''
})

let [ID,setID]=useState('')

let [Replies,setReplies]=useState([])

  let showModal = () =>setshow(true);
  let closeModal = () =>setshow(false);


  function EditComplaint(event){

    setComplaint({Body:event.target.value})

    event.preventDefault()

  }

  function PostEditedComplaint(event){
    axios.put(`http://127.0.0.1:5000/student/complaint/${props.Rollno}/${ID}`,Complaint)
    .then(r=>console.log(r.data))
    .catch(err=>console.log(err))
    setshow(false)
    // event.preventDefault()
  }

  function DeletePostedComplaint(event){

    axios.delete(`http://127.0.0.1:5000/student/complaint/${props.Rollno}/${ID}`,Complaint)
    .then(r=>setComplaint({Res:r.status}))
    .catch(err=>console.log(err))
    setDeleteComplaint(false)
    // alert('Complaint Deleted')
    

  }


    let [complaints,setComplaints]=useState([]);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:5000/student/complaint/${props.Rollno}/${sort}/`)
        .then(r=>setComplaints(r.data))
        .catch(err=>console.log(err))


        axios.get(`http://127.0.0.1:5000/student/get/reply/${props.Rollno}/${ID}/`)
        .then(r=>setReplies(r.data))
        .catch(err=>console.log(err))

        }
        ,[ID,sort]);


  return (
    <div>

    {

      props.Rollno===undefined?
      <div>
        <h1>Login Required</h1>
      </div>:


<div>


{
  Complaint.Res===200 && window.location.reload()
}

<Modal 
            show={show}
            onHide={closeModal}
            backdrop="static"
            centered
            className='modal'>
            <ModalHeader>
                <ModalTitle>Edit Your Complaint</ModalTitle>
            </ModalHeader>
            <ModalBody>
            <form autoComplete='off' class="p-2">
            <textarea 
                className="form-control mb-4" 
                id="complaints" cols="10" rows="5" placeholder='Write a complaint'
                // {...register("complaints",{required:true})}
                value={Complaint.Body} onChange={EditComplaint}
                >
            </textarea>
                <button className='btn btn-danger mb-3 me-3' type='button' onClick={()=>setshow(false)}>
                <svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
<h6 className='ms-2 d-inline'>Cancel</h6>
                </button>
                <button className='btn btn-success mb-3' onClick={PostEditedComplaint} type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <h6 className='ms-2 d-inline'>Save</h6>
                </button>



            </form>
            </ModalBody>
        </Modal>


        <Modal 
            show={DeleteComplaint}
            onHide={closeModal}
            backdrop="static"
            centered
            className='modal'>
            <ModalHeader>
                <ModalTitle>Do you really want to delete your complaint</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <h5 className='p-2'>{Complaint.Body}</h5>
              </ModalBody>
              <ModalFooter>
                <button className='btn btn-success mb-3 me-3' type='button' onClick={()=>setDeleteComplaint(false)}>
                <svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
<h6 className='ms-2 d-inline'>Cancel</h6>
                </button>
                <button className='btn btn-danger mb-3' onClick={DeletePostedComplaint}>
                <svg xmlns="http://www.w3.org/2000/svg" height="25" className='pb-1' style={{fill:'white'}} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                              <h6 className='d-inline ms-2'>Delete</h6>
                </button>
                </ModalFooter>

        </Modal>

        <Modal 
            show={showreply}
            onHide={closeModal}
            backdrop="static"
            centered
            className='modal-xl'>
            <ModalHeader>
                <ModalTitle><span className='text-success'>Your complaint </span>: {Complaint.Body}</ModalTitle>
                
            </ModalHeader>
            <ModalBody style={{overflow:'auto'}}>
              {
                Replies.length===0?
                 <div>
                  <h4 style={{textAlign:'center'}}>No Replies to your complaint</h4>
                </div>:
                <div>

<h3 style={{textAlign:'center'}}>Replies to your complaint</h3>

                  <table style={{textAlign:'justify'}} className="table table-bordered border-dark table-hover table-responsive-sm mt-4">
      <thead className='table-dark'>
          <tr>
              <th><h5 className='p-3'>Admin</h5></th>
              <th><h5 className='p-3'>Previous Replies</h5></th>
              <th style={{textAlign:'center'}}><h5 className='p-3'>Date&Time</h5></th>
          </tr>
      </thead>
      <tbody>
          {
              Replies.map((d)=>(
                  <tr key={d.id}>
                    <td className='p-3'><h5>{d.admin}</h5></td>
                      <td style={{width:'50%'}} className='p-3'><h5>{d.reply}</h5></td>
                      <td style={{textAlign:'center',width:''}}>
                      <div className='btn btn-dark mt-2 mb-2'><h5>
                      <svg xmlns="http://www.w3.org/2000/svg" height="25" style={{fill:'white'}} viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
                      <span className='ms-2'>
                        {d.date.split('T')[0]}</span>
                        <div className='p-2'></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className='me-2' fill='white' height="25" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
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




            </ModalBody>
              <ModalFooter>
                <button className='btn btn-danger mb-3 me-3' type='button' onClick={()=>setshowreply(false)}>
                <svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
<h6 className='ms-2 d-inline'>Close</h6>
                </button>
                {/* <button className='btn btn-danger mb-3' onClick={DeletePostedComplaint}>Delete</button> */}
                </ModalFooter>

        </Modal>


    <div className=''>

    <div style={{backgroundColor:'#82001a',marginRight:'auto'}} className='py-2 text-white my-4'>

<div className='row'>


<div className='col mt-2'>
          <h5 className=''>You have Posted {complaints.length} Complaint(s)</h5>


</div>

<div className='col mt-2'>


      <h5 className=''>My Complaints</h5>
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

      <h4 className='mb-4 mt-2 fw-semibold'>Viewing complaints posted by you. Edit or delete your previously complaints here</h4>



          {   

complaints.length===0?
<div>
  <h4>No Complaints By you. Post your complaint in Post Complaints.</h4>
</div>:


<div>

{
            complaints.map((d)=>(

              <div key={d.id} class="card mb-3 complaint-card">
            <div class="card-body row">

              <div className='col'>
                <h5 style={{textAlign:'justify'}} class="card-title">{d.body}</h5>
              </div>


                <div className='col-4'>

                <div style={{width:'18rem'}} className='btn btn-dark mt-2 mb-2' >
                      <h5>
              <svg xmlns="http://www.w3.org/2000/svg" height="25" style={{fill:'white'}} viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
              <span className='ms-2'>
                {d.date.split('T')[0]}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='ms-2 me-2' fill='white' height="25" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              {d.date.split('T')[1]}
              </h5>
              </div>



              <div className='btn-group my-2' role='group'>
                    <Button onClick={()=>{
                      setshow(true)
                      setID(d.id)
                      setComplaint({Body:d.body})
                      }} className='btn btn-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="25"  style={{fill:'white'}}  className='pb-1' viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                      <h6 className='d-inline ms-2'>Edit</h6>
                      </Button>
                    <Button onClick={()=>{
                      setDeleteComplaint(true)
                      setID(d.id)
                      setComplaint({Body:d.body})
                    }} className='btn btn-danger '>
                      <svg xmlns="http://www.w3.org/2000/svg" height="25" className='pb-1' style={{fill:'white'}} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                      <h6 className='d-inline ms-2'>Delete</h6>
</Button>

<Button onClick={()=>{
                      setshowreply(true)
                      setID(d.id)
                      setComplaint({Body:d.body})
                    }}  className='btn btn-success'>

<svg xmlns="http://www.w3.org/2000/svg" fill='white' height="25" viewBox="0 0 512 512"><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg>
<h6 className='d-inline ms-2'>Replies</h6>
                      
                    </Button>
</div>

</div>



            </div>


        </div>

            ))
        }


{/* <div class="card complaint-card">
            <div class="card-body">
                <h5 class="card-title">Complaint Title</h5>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-primary">View</button>
                    <button type="button" class="btn btn-success">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>


            <div class="card reply-card">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Admin Reply</h6>
                    <p class="card-text">Admin's reply goes here...</p>
                </div>
            </div>
        </div> */}


{/*   
<table style={{textAlign:'justify'}} className="table table-borderless table-hover border-dark table-responsive-sm mt-4">
    <thead className='table-dark'>
        <tr>
            <th><h4 className='p-3'>My Complaint
            </h4></th>
            <th style={{textAlign:'center'}}><h4 className='p-3'>Date&Time</h4></th>
        </tr>
    </thead>
    <tbody>
        {
            complaints.map((d)=>(
                <tr key={d.id}>
                    <td   className='p-3'><h4>{d.body}</h4></td>
                    <td style={{width:'35%',textAlign:'center'}} className='p-3'>
                    <div className='btn btn-dark mt-2 mb-2' >
                      <h5>
              <svg xmlns="http://www.w3.org/2000/svg" height="25" style={{fill:'white'}} viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
              <span className='ms-2'>
                {d.date.split('T')[0]}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='ms-2 me-2' fill='white' height="25" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              {d.date.split('T')[1]}
              </h5>
              </div>
                    <div>
                    <Button onClick={()=>{
                      setshow(true)
                      setID(d.id)
                      setComplaint({Body:d.body})
                      }} className='btn btn-primary m-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="25"  style={{fill:'white'}}  className='pb-1' viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                      <h6 className='d-inline ms-2'>Edit</h6>
                      </Button>
                    <Button onClick={()=>{
                      setDeleteComplaint(true)
                      setID(d.id)
                      setComplaint({Body:d.body})
                    }} className='btn btn-danger m-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="25" className='pb-1' style={{fill:'white'}} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                      <h6 className='d-inline ms-2'>Delete</h6>
</Button>

<Button onClick={()=>{
                      setshowreply(true)
                      setID(d.id)
                      setComplaint({Body:d.body})
                    }}  className='btn btn-success m-3'>

<svg xmlns="http://www.w3.org/2000/svg" fill='white' height="25" viewBox="0 0 512 512"><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg>
<h6 className='d-inline ms-2'>Replies</h6>
                      
                    </Button>
</div>

</td>
                </tr>
            ))
        }
    </tbody>
</table> */}



</div>



}


      
    </div>
    </div>
    }
    </div>
  )
}


export default Mycomplaints
