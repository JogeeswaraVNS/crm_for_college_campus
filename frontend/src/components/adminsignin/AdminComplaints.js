import React from 'react'
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import { Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';

// import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';


function AdminComplaints(props) {


  let [sort,setsort]=useState(false)

  let [show,setshow] = useState(false);

  let [DeleteMessage,setDeleteMessage] = useState(false);

  let [EditMessageShow,setEditMessageShow] = useState(false);

  let [Data,setData] = useState([]);

  let [AdminID,setAdminID]=useState(props.AdminID)

  let [Rollno,setRollno]=useState('')

  let [Message,setMessage]=useState({
    Complaint:'',
    Reply:'',
    DeleteReply:'',
    EditReply:'',
    Res:'',
})



  let [ID,setID]=useState('')

  let showModal = () =>setshow(true);
  let closeModal = () =>setshow(false);

  useEffect(()=>{

    axios.get(`http://127.0.0.1:5000/admin/get/reply/${props.AdminID}/${Rollno}/${ID}/`,Message)
    .then(r=>setData(r.data))
    .catch(err=>console.log(err))
  
  },[ID])

  function EditMessage(event){

    setMessage({...Message,Reply:event.target.value})

    event.preventDefault()

  }


  function EditReplyMethod(event){

    setMessage({...Message,EditReply:event.target.value})

    event.preventDefault()

  }

  function PostEditedMessage(event){
    console.log(Message)
    if(Message.Reply!==''){
    axios.post(`http://127.0.0.1:5000/admin/post/reply/${props.AdminID}/${Rollno}/${ID}/`,Message)
    .then(r=>console.log(r.data))
    .catch(err=>console.log(err))
    setshow(false)
    // event.preventDefault()
    window.location.reload()
  }
  }

  function PostEditedReply(event){
    console.log(Message)
    axios.put(`http://127.0.0.1:5000/admin/put/reply/${props.AdminID}/${Rollno}/${ID}/`,Message)
    .then(r=>console.log(r.data))
    .catch(err=>console.log(err))
    setEditMessageShow(false)
    // event.preventDefault()
    // window.location.reload()
  }

  function DeletePostedMessage(event){

    axios.delete(`http://127.0.0.1:5000/admin/delete/reply/${AdminID}/${Rollno}/${ID}/`)
    .then(r=>console.log(r.status))
    .catch(err=>console.log(err))
    // setDeleteMessage(false)
    // alert('Message Deleted')
    // event.preventDefault()
    window.location.reload()

    

  }


  let [complaints,setComplaints]=useState([]);

  //useEffect
  useEffect(()=>{
      //effect
      // fetch('{/* localhost backend*/}')
      // .then((complaintres)=>complaintres.json())
      // .then((complaintdata)=>setComplaints(complaintdata))
      // .catch((err)=>console.err("Error is :",err))
      axios.get(`http://127.0.0.1:5000/admin/complaints/${sort}/`)
      .then(r=>setComplaints(r.data))
      .catch(err=>console.log(err))

      }
      //dependency array
      ,[sort]);


  return (
    <div>
          {

props.AdminID===undefined?
<div>
  <h1>Login Required</h1>
</div>:





<div className=''>
  {/* <DeleteOutlineOutlinedIcon/> */}


  <Modal 
            show={DeleteMessage}
            // onHide={()=>{this.setState({show:false})}}
            backdrop="static"
            centered
            className='modal'>
            <ModalHeader>
                <ModalTitle>Do you really want to delete your Reply</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <h6 className='p-2'>{Message.DeleteReply}</h6>
              </ModalBody>
              <ModalFooter>
                <button className='btn btn-success mb-3 me-3' type='button' onClick={()=>setDeleteMessage(false)}>
                <svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
<h6 className='ms-2 d-inline'>Cancel</h6>
                </button>
                <button className='btn btn-danger mb-3' onClick={DeletePostedMessage}>
                <svg xmlns="http://www.w3.org/2000/svg" height="25" className='pb-1' style={{fill:'white'}} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                              <h6 className='d-inline ms-2'>Delete</h6>
                </button>
                </ModalFooter>
        </Modal>



        <Modal 
            show={EditMessageShow}
            // onHide={()=>{this.setState({show:false})}}
            backdrop="static"
            centered
            className='modal'>
            <ModalHeader>
                <ModalTitle>Edit your Reply</ModalTitle>
            </ModalHeader>
            <ModalBody>
              {/* <h6 className='p-2'>{Message.EditReply}</h6> */}
              <form autoComplete='off' class="p-2">
            <textarea 
                className="form-control mb-4" 
                id="Messages" cols="10" rows="5" placeholder='Write a Reply'
                // {...register("Messages",{required:true})}
                value={Message.EditReply} onChange={EditReplyMethod}
                >
            </textarea>
                <button className='btn btn-danger mb-3 me-3' type='button' onClick={()=>setEditMessageShow(false)}>
                <svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
<h6 className='ms-2 d-inline'>Cancel</h6>
</button>
                <button className='btn btn-success mb-3' type='button' onClick={PostEditedReply} >
                <svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <h6 className='ms-2 d-inline'>Save</h6>
                </button>



            </form>
              </ModalBody>
        </Modal>


<Modal
 
            show={show}
            backdrop="static"
            centered
            className='modal-lg'>
            <ModalHeader>
                <ModalTitle className='text-success'>
                  Send Reply To {Rollno}
                  </ModalTitle>
            </ModalHeader>
            <ModalBody style={{overflow:'auto'}}>
              <h5><span className='text-danger'>Complaint</span> : {Message.Complaint}</h5>
              {
                Data.length===0?
                 <div>
                  
                </div>:
                <div>

                  <table style={{textAlign:'justify'}} className="table table-bordered border-dark table-hover table-responsive-sm mt-4">
      <thead className='table-dark'>
          <tr>
              <th><h6 className='p-3'>Previous Replies</h6></th>
              <th>
              <h6 className='p-3'>Date & Time
              </h6>
              </th>
              {/* <th></th> */}
          </tr>
      </thead>
      <tbody>
          {
              Data.map((d)=>(
                  <tr key={d.id}>
                      <td style={{width:'60%'}} className='p-3'><h6>{d.reply}</h6></td>

                      <td className='pt-4'style={{textAlign:'center'}}>
                        <div className='btn btn-dark' ><h6>
                      <svg xmlns="http://www.w3.org/2000/svg" height="25" style={{fill:'white'}} viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
                      <span className='ms-2'>
                        {d.date.split('T')[0]}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className='ms-2 me-2' fill='white' height="25" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                      {d.date.split('T')[1]}
                      </h6></div>
                      <div className='p-3'>
                      <Button onClick={()=>{
                              setRollno(d.rollno)
                              setshow(false)
                              setEditMessageShow(true)
                              setID(d.id)
                              setMessage({...Message,EditReply:d.reply})
                              setAdminID(d.admin)                              
                            }}  className='btn btn-primary'>

<svg xmlns="http://www.w3.org/2000/svg" height="25"  style={{fill:'white'}}  className='pb-1' viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                              <h6 className='d-inline ms-2'>Edit</h6>
                              
                            </Button>
                            <span className='p-2'></span>
                            <Button onClick={()=>{
                              setRollno(d.rollno)
                              setDeleteMessage(true)
                              setID(d.id)
                              // setMessage({...Message,Reply:d.reply})
                              setMessage({...Message,DeleteReply:d.reply})
                              setshow(false)
                              // DeletePostedMessage
                              setAdminID(d.admin)
                            }}  className='btn btn-danger'>
                              
                              <svg xmlns="http://www.w3.org/2000/svg" height="25" className='pb-1' style={{fill:'white'}} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                              <h6 className='d-inline ms-2'>Delete</h6>
{/* <h6 className='d-inline'></h6> */}
                              </Button>
                              </div>
                              </td>
                            



                  </tr>

              ))
          }
      </tbody>
  </table>





                </div>
              }



            <form autoComplete='off' class="p-2">
            <textarea 
                className="form-control mb-4" 
                id="Messages" cols="10" rows="5" placeholder='Write a Reply'
                // {...register("Messages",{required:true})}
                value={Message.Reply} onChange={EditMessage}
                >
            </textarea>
                <button className='btn btn-danger mb-3 me-3' type='button' onClick={()=>setshow(false)}>


<svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>


                <h6 className='ms-2 d-inline'>Cancel</h6>
                </button>
                <button className='btn btn-success mb-3' type='button' onClick={PostEditedMessage} >
                <svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                <h6 className='ms-2 d-inline'>Send</h6>
                </button>




            </form>
            </ModalBody>
        </Modal>








        <div style={{backgroundColor:'#82001a',marginRight:'auto'}} className='py-2 text-white my-4'>


<div className='row'>


<div className='col-3 mt-2'>
<h5 >You have {complaints.length} Complaint(s)</h5>
</div>


<div className='col-6 mt-2'>
  <h5>
Viewing Complaints posted by Students
  </h5>
</div>


<div className='col-3 mt-2'>
<input className='me-1' type='checkbox' checked={sort} id='check' label='Sort By Date&Time' onClick={()=>{
  setsort(!sort);

}}/>
<label htmlFor="check" className="form-label fw-semibold">
  <h5>
  Latest first
  </h5>
  </label>
</div>

</div>


</div>






{   

complaints.length===0?
<div>
  <h1><span className='text-success'>Congratulations </span>Admin. No Complaints By Students</h1>
</div>:


<div>
<table style={{textAlign:'justify'}}  className="table table-bordered border-dark table-hover table-responsive-sm">
    <thead className='table-dark'>
        <tr>
            <th><h6 className='p-3'>Name</h6></th>
            <th><h6 className='p-3'>Rollno</h6></th>
            <th><h6 className='p-3'>Department</h6></th>
            <th><h6 className='p-3'>Complaint Description</h6></th>
            <th style={{textAlign:'center'}}><h6 className='p-3'>Date & Time
            </h6></th>
        </tr>
    </thead>
    <tbody>
        {
            complaints.map((d)=>(
                <tr key={d.id}>
                    <td style={{width:'25%'}} className='p-3'><h6>{d.name}</h6></td>
                    <td className='p-3'><h6>{d.rollno}</h6></td>
                    <td className='p-3'><h6>{d.department}</h6></td>
                    <td style={{width:'40%'}} className='p-3'><h6>{d.body}</h6></td>
                    <td style={{width:'20%'}} className='p-3'>
                      <div style={{textAlign:'center'}}>

                    <div className='btn btn-dark' >
                      <h6>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" style={{fill:'white'}} viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
                    <span className='ms-2'>
                      {d.date.split('T')[0]}</span>
                      <div className='p-1'></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='ms-2 me-2' fill='white' height="25" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                    {d.date.split('T')[1]}
                    </h6>
                    </div>
                    
                      <Button onClick={()=>{
                            setRollno(d.rollno)
                            setshow(true)
                            setID(d.id)
                            setMessage({...Message,Complaint:d.body})
                            // setComplaint(d.body)
                            setAdminID(d.admin)                              
                          }}  className='btn btn-success m-3'>

<svg xmlns="http://www.w3.org/2000/svg" fill='white' height="25" viewBox="0 0 512 512"><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg>
<h6 className='d-inline ms-2'>Reply</h6>
                            
                          </Button>
                      </div>
                          </td>
                </tr>
            ))
        }
    </tbody>
</table>
</div>
}





</div>
}
    </div>
  )
}

export default AdminComplaints