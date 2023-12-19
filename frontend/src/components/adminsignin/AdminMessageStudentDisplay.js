import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';


function AdminMessageStudentDisplay(props) {

  let [sort,setsort]=useState(false)

  let [show,setshow] = useState(false);

  let [DeleteMessage,setDeleteMessage] = useState(false);

  let [AdminID,setAdminID]=useState(props.AdminID)

  let [Rollno,setRollno]=useState('')

  let [Message,setMessage]=useState({
    Body:'',
    Res:'',
})

  let [ID,setID]=useState('')

  let showModal = () =>setshow(true);
  let closeModal = () =>setshow(false);

  function EditMessage(event){

    setMessage({Body:event.target.value})

    event.preventDefault()

  }


  function PostEditedMessage(event){
    console.log(Message)
    axios.put(`http://127.0.0.1:5000/admin/put/message/student/${AdminID}/${Rollno}/${ID}/`,Message)
    .then(r=>console.log(r.data))
    .catch(err=>console.log(err))
    setshow(false)
    // event.preventDefault()
    window.location.reload()
  }

  function DeletePostedMessage(event){

    axios.delete(`http://127.0.0.1:5000/admin/message/student/${AdminID}/${Rollno}/${ID}/`,Message)
    .then(r=>console.log(r.status))
    .catch(err=>console.log(err))
    setDeleteMessage(false)
    // alert('Message Deleted')
    // event.preventDefault()
    window.location.reload()

    

  }

    let [Data,setData]=useState([]);

    useEffect(()=>{

        axios.get(`http://127.0.0.1:5000/get/student/message/student/${props.AdminID}/${sort}/`)
        .then(r=>setData(r.data))
        .catch(err=>console.log(err))
  
        }
        //dependency array
        ,[props.AdminID,sort]);

  return (
    <div>

<Modal 
            show={show}
            // onHide={closeModal}
            backdrop="static"
            centered
            className='modal'>
            <ModalHeader>
                <ModalTitle>Edit Your Message</ModalTitle>
            </ModalHeader>
            <ModalBody>
            <form autoComplete='off'>
            <textarea 
                className="form-control mb-4" 
                id="Messages" cols="10" rows="5" placeholder='Write a Message'
                // {...register("Messages",{required:true})}
                value={Message.Body} onChange={EditMessage}
                >
            </textarea>
            </form>
                {/* <button className='btn btn-danger mb-3 me-3' type='button' onClick={()=>setshow(false)}>Cancel</button>
                <button className='btn btn-success mb-3' type='button' onClick={PostEditedMessage} >Save</button> */}

<ModalFooter>
                <Button onClick={()=>{
                  setshow(false)
                            }}  className='btn btn-danger me-3 ps-3 pe-3'>
                              
                              <svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
<h6 className='ms-2 d-inline'>Cancel</h6>
                              </Button>


                              <Button onClick={
                  PostEditedMessage
                            }  className='btn btn-success ps-3 pe-3'>
                              
                              <svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <h6 className='ms-2 d-inline'>Save</h6>
                              </Button>



            </ModalFooter>
            </ModalBody>
        </Modal>


        <Modal 
            show={DeleteMessage}
            // onHide={closeModal}
            backdrop="static"
            centered
            className='modal'>
            <ModalHeader>
                <ModalTitle>Do you really want to delete your Message</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <h5 className='p-2'>{Message.Body}</h5>
              </ModalBody>
              <ModalFooter>
                {/* <button className='btn btn-success mb-3 me-3' type='button' onClick={()=>{setDeleteMessage(false)}}>Cancel</button> */}

                <Button onClick={()=>{
                  setDeleteMessage(false)
                            }}  className='btn btn-success p-2 ps-3 pe-3'>
                              
                              <svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
<h6 className='ms-2 d-inline'>Cancel</h6>
                              </Button>


                              <Button onClick={
                  DeletePostedMessage
                            }  className='btn btn-danger m-3 p-2 ps-3 pe-3'>
                              
                              <svg xmlns="http://www.w3.org/2000/svg" height="25" className='pb-1' style={{fill:'white'}} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                              <h6 className='d-inline ms-2'>Delete</h6>
                              </Button>


                {/* <button className='btn btn-danger mb-3' type='button' onClick={DeletePostedMessage}>Delete</button> */}
                </ModalFooter>

        </Modal>
        
        <div className=''>

          <div style={{backgroundColor:'#82001a'}} className='py-2 text-white my-4'>

<div className='row'>

          <div className='col mt-2'>
<h5 className=''>You have Posted {Data.length} Messages</h5>

</div>


<div className='col mt-2'>
<h5 className=''>

Student Messages
<svg xmlns="http://www.w3.org/2000/svg" className='ms-1 mb-1' fill='#ffc107'  height="25" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>

</h5>
</div>


<div className='col mt-2'>
<input type='checkbox' className='me-1' checked={sort} id='check' label='Sort By Date&Time' onClick={()=>{
  setsort(!sort);
  }}/>
<label htmlFor="check" className="">
  <h5>
  Latest first
  </h5>
  </label>
</div>


</div>







</div>

      <h5 className='mt-2 mb-4 fw-semibold'>Viewing Messages posted by you to Students. Edit or delete your previously posted Messages here
</h5>



      <div className='mb-4 mt-2'>
          </div>

        {   

        Data.length===0?
        <div>
          <h4 className='department'>No Messages By you to Students. Post your Messages in Post Message.</h4>
        </div>:


<div>
        <table style={{textAlign:'justify'}} className="table table-bordered border-dark table-hover table-responsive-sm mt-4">
            <thead className='table-dark'>
                <tr>
                <th><h5 className='p-3'>Admin</h5></th>
                <th><h5 className='p-3'>Rollno</h5></th>
                <th><h5 className='p-3'>Message</h5></th>
                    <th style={{textAlign:'center'}}><h5 className='p-3'>Date&Time</h5></th>
                </tr>
            </thead>
            <tbody>
                {
                    Data.map((d)=>(
                        <tr key={d.id}>
                            <td className='p-3'><h5>{d.admin}</h5></td>
                            <td className='p-3'><h5>{d.rollno}</h5></td>
                            <td style={{width:'40%'}} className='p-3'><h5>{d.message}</h5></td>
                            <td style={{textAlign:'center',width:'30%'}} className='p-3'>
                            <div className='btn btn-dark' ><h5>
                      <svg xmlns="http://www.w3.org/2000/svg" height="25" style={{fill:'white'}} viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
                      <span className='ms-2'>
                        {d.date.split('T')[0]}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className='ms-2 me-2' fill='white' height="25" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                      {d.date.split('T')[1]}
                      </h5></div>
                            <div>
                            <Button onClick={()=>{
                              setRollno(d.rollno)
                              setshow(true)
                              setID(d.id)
                              setMessage({Body:d.message})
                              setAdminID(d.admin)                              
                            }}  className='btn btn-primary m-3'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="25"  style={{fill:'white'}}  className='pb-1' viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                              <h6 className='d-inline ms-2'>Edit</h6>
                            </Button>
                            <Button onClick={()=>{
                              setRollno(d.rollno)
                              setDeleteMessage(true)
                              setID(d.id)
                              setMessage({Body:d.message})
                              setAdminID(d.admin)
                            }}  className='btn btn-danger m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="25" className='pb-1' style={{fill:'white'}} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                              <h6 className='d-inline ms-2'>Delete</h6>
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

    </div>
  )
}

export default AdminMessageStudentDisplay