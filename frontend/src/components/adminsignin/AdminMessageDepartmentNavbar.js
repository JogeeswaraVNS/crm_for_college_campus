import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import axios from 'axios';



function AdminMessageDepartmentNavbar(props) {

  let [Dept,setDept]=useState('d')

  let [Data,setData]=useState({
    AdminID:props.AdminID,
    Message:'',
    Res:''
  })

  let {Res,Message}=Data;

  function changedept(d){
    setDept(d)
    setData({AdminID:props.AdminID})
    // alert(Data.AdminID)
    // alert(Dept)
  }

  function AdminDepthandleChangeMessage(event){

    setData({Message:event.target.value})

  }

  function AdminDepthandleSubmit(event){


    axios.post(`http://127.0.0.1:5000/admin/${props.AdminID}/message/department/${Dept}/`,Data)
    .then(e=>setData({Res:e.status}))
    .catch(e=>setData({Res:e.response.status}))
    // .then(r=>console.log(r.data))
    // .catch(err=>console.log(err))

    console.log(Data)
    console.log(Dept)
    event.preventDefault()
  }


  return (
    <div>

      <h3 className='mt-4 p-3 department'>Select a Department to Post a message to the Department</h3>
        
        <Navbar expand="lg" className="bg-body-tertiary shadow mt-3">
              <Container>
              {/* <Link to='/admin/senddepartmentmessage' className='nav-link'>
                              <h6 className='m-2 ms-3 department'>Select Department</h6>
                          </Link> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  <Nav.Link className='fw-bold fs-5'>
                  <button className='btn btn-warning rounded-pill ps-4 pe-4 pt-3 pb-2' onClick={()=>changedept("IT")}>
                        <h6>IT</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("CSE")}>
                        <h6>CSE</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("AE")}>
                        <h6>AE</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("CS-AIML")}>
                        <h6>CS_AIML</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-3 rounded-pill pe-3 pt-3 pb-2' onClick={()=>changedept("CS-DS")}>
                        <h6>CS_DS</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("CS-IoT")}>
                        <h6>CS_IoT</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("CS-CYS")}>
                        <h6>CS_CYS</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("CSBS")}>
                        <h6>CSBS</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("CE")}>
                        <h6>CE</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("ECE")}>
                        <h6>ECE</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("EEE")}>
                        <h6>EEE</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("EIE")}>
                        <h6>EIE</h6>
                      </button>
                      </Nav.Link>
                      <Nav.Link className='fw-bold fs-5'>
                      <button className='btn btn-warning ps-4 rounded-pill pe-4 pt-3 pb-2' onClick={()=>changedept("ME")}>
                        <h6>ME</h6>
                      </button>
                      </Nav.Link>



                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>





            {
            Dept==='d'?
            null:
            <div>

<div className='container mx-auto mt-5'>
            {Res===200 && <h3 className='text-success p-3'>Message Sent Successfully. You can view your Message in Your Department Messages</h3>}
            {Res===401 && <h3 className='text-danger p-3'>Message Cannot be Empty/Message Already Sent</h3>}
          <h2 className='p-2 mb-5'>Post a Message to all the Students in the Department of {Dept}</h2>
          {/* <h3 className='mb-5 p-2'>Drop your suggestions here</h3> */}
          <form onSubmit={AdminDepthandleSubmit}>
            <textarea 
                className="form-control w-50 mx-auto" 
                id="complaints" cols="10" rows="5" placeholder='Write a ṃessage'
                // {...register("complaints",{required:true})}
                value={Message} onChange={AdminDepthandleChangeMessage}
                >
            </textarea>
            {/* validation error textarea*/}
            {/* {errors.complaints?.type=="required" && <p className="text-danger fw-semibold">*Complaint required to submit</p>} */}
            <div className="form-group">
                <button className="btn mt-4 btn-warning" type="submit">Post Message</button>
            </div>
          </form>
        </div>

              </div>
            }

    </div>
  )
}

export default AdminMessageDepartmentNavbar