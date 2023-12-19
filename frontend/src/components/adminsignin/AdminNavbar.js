import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
function AdminNavbar(props) {

  const [IT, setIT] = useState(false);
  const [AE, setAE] = useState(false);
  const [CE, setCE] = useState(false);
  const [CS_AIML, setCS_AIML] = useState(false);
  const [CS_CYS, setCS_CYS] = useState(false);
  const [CS_DS, setCS_DS] = useState(false);
  const [CS_IoT, setCS_IoT] = useState(false);
  const [CSBS, setCSBS] = useState(false);
  const [CSE, setCSE] = useState(false);
  const [ECE, setECE] = useState(false);
  const [EEE, setEEE] = useState(false);
  const [EIE, setEIE] = useState(false);
  const [ME, setME] = useState(false);




  const [ITresults, setITresults] = useState(false);
  const [AEresults, setAEresults] = useState(false);
  const [CEresults, setCEresults] = useState(false);
  const [CS_AIMLresults, setCS_AIMLresults] = useState(false);
  const [CS_CYSresults, setCS_CYSresults] = useState(false);
  const [CS_DSresults, setCS_DSresults] = useState(false);
  const [CS_IoTresults, setCS_IoTresults] = useState(false);
  const [CSBSresults, setCSBSresults] = useState(false);
  const [CSEresults, setCSEresults] = useState(false);
  const [ECEresults, setECEresults] = useState(false);
  const [EEEresults, setEEEresults] = useState(false);
  const [EIEresults, setEIEresults] = useState(false);
  const [MEresults, setMEresults] = useState(false);


  const [showalumni, setshowalumni] = useState(false);
  const [showalumnievents, setshowalumnievents] = useState(false);



  let [Name,setName]=useState('')

  let handleLogOut=()=>{
      localStorage.removeItem('AdminID')
      window.location.href='/admin'
  }

  useEffect(()=>{

      axios.get(`http://127.0.0.1:5000/get/admins/${props.AdminID}/`)
      .then(r=>setName(r.data))
      .catch(err=>console.log(err))


  },[])



  const [showpostmessage, setShowpostmessage] = useState(false);


  let [dept,setDept]=useState(false)
  let [deptresults,setDeptresults]=useState(false)


  const [showpostmessagedept, setShowpostmessagedept] = useState(false);
  const [showmessagedept, setShowmessagedept] = useState(false);
  const [showmessagedeptstudent, setShowmessagedeptstudent] = useState(false);


  
  const [showmessage, setShowmessage] = useState(false);



  return (
    <div className='px-3'>

<div className='' style={{display:'flex',justifyContent:'space-around',marginTop:'-2rem'}}>

<div style={{marginRight:'auto'}}>
<h3 className="fw-bold container text-dark">Welcome {Name}</h3>
</div>

<div style={{display:'flex',justifyContent:'flex-end'}}>
<Nav.Link href="/admin/myprofile" className='fw-bold fs-5 px-3 text-dark'>
<svg xmlns="http://www.w3.org/2000/svg" fill='black' className='ms-2 mb-1' height="40" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
          </Nav.Link>

          <Nav.Link className='ps-3'>
          <div className='btn btn-danger'onClick={handleLogOut}>
          <h6 className='d-inline'>Log Out</h6>
          <svg xmlns="http://www.w3.org/2000/svg" className='ms-1' height="25" fill='currentColor' viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
  </div>
  </Nav.Link>
</div>
</div>
      

<div className='row'>


      <div style={{height:'40rem',overflowY:'scroll'}} className='col-3'>

      <Navbar expand="lg" style={{textAlign:'left'}} className="">
          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                  <Nav.Link onClick={()=>{setDept(!dept)
                  setIT(false)
                  setCSE(false)
                  setAE(false)
                  setCE(false)
                  setCSBS(false)
                  setME(false)
                  setECE(false)
                  setEEE(false)
                  setEIE(false)
                  setCS_AIML(false)
                  setCS_CYS(false)
                  setCS_DS(false)
                  setCS_IoT(false)
                }} className='text-dark'>
                    <h6>

                    Mid Marks
                    <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
                                      </h6>

                  </Nav.Link>


                  {dept && (
            <div className="ms-3">

<Nav.Link onClick={()=>setIT(!IT)}>
    <h6 className='text-dark'>
      Information Technology
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6>
</Nav.Link>


{IT && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/IT/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/IT/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/IT/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/IT/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/IT/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/IT/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/IT/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/IT/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}



<Nav.Link onClick={()=>setCSE(!CSE)}>
<h6 className='text-dark'>
      Computer Science
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6>
</Nav.Link>

{CSE && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/CSE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CSE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CSE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CSE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CSE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CSE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CSE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CSE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}



<Nav.Link onClick={()=>setAE(!AE)}>
<h6 className='text-dark'>
      Automobie
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6>
</Nav.Link>

{AE && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/AE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/AE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/AE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/AE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/AE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/AE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/AE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/AE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}


<Nav.Link onClick={()=>setCE(!CE)}>
<h6 className='text-dark'>
      Civil Engineering
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>

    {CE && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/CE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}




    <Nav.Link>
<h6 className='text-dark' onClick={()=>setECE(!ECE)}>
Electronics and Communication
<svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>


    {ECE && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/ECE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/ECE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/ECE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/ECE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/ECE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/ECE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/ECE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/ECE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}



<Nav.Link onClick={()=>setEEE(!EEE)}>
<h6 className='text-dark' >
Electrical and Electronics
<svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>

    {EEE && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/EEE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/EEE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/EEE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/EEE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/EEE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/EEE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/EEE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/EEE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}


<Nav.Link onClick={()=>setEIE(!EIE)}>
<h6 className='text-dark'>
Electronics and Instrumentation
<svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>
    {EIE && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/EIE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/EIE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/EIE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/EIE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/EIE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/EIE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/EIE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/EIE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}




<Nav.Link onClick={()=>setME(!ME)}>
<h6 className='text-dark'>
      Mechanical
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>

    {ME && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/ME/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/ME/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/ME/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/ME/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/ME/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/ME/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/ME/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/ME/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}




    <Nav.Link onClick={()=>setCSBS(!CSBS)}>
<h6 className='text-dark'>
      CSBS
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>
    {CSBS && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/CSBS/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CSBS/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CSBS/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CSBS/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CSBS/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CSBS/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CSBS/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CSBS/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}




<Nav.Link onClick={()=>setCS_AIML(!CS_AIML)}>
<h6 className='text-dark'>
      CS-AIML
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>
    {CS_AIML && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/CS-AIML/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-AIML/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CS-AIML/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CS-AIML/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-AIML/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-AIML/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>



    
            </div>
          )}




    <Nav.Link onClick={()=>setCS_CYS(!CS_CYS)}>
<h6 className='text-dark'>
      CS-CYS
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>
    {CS_CYS && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/CS-CYS/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-CYS/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CS-CYS/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CS-CYS/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-CYS/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-CYS/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>







    
            </div>
          )}








<Nav.Link onClick={()=>setCS_IoT(!CS_IoT)}>
<h6 className='text-dark'>
      CS-IoT
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>
    {CS_IoT && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/CS-IoT/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-IoT/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CS-IoT/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CS-IoT/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-IoT/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-IoT/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>










    
            </div>
          )}



<Nav.Link onClick={()=>setCS_DS(!CS_DS)}>
<h6 className='text-dark'>
      CS-DS
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>

    {CS_DS && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/midmarks/CS-DS/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-DS/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CS-DS/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/midmarks/CS-DS/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-DS/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/midmarks/CS-DS/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>









    
            </div>
          )}



            </div>
          )}








                  <Nav.Link onClick={()=>{setDeptresults(!deptresults)
                                    setITresults(false)
                                    setCSEresults(false)
                                    setAEresults(false)
                                    setCEresults(false)
                                    setCSBSresults(false)
                                    setMEresults(false)
                                    setECEresults(false)
                                    setEEEresults(false)
                                    setEIEresults(false)
                                    setCS_AIMLresults(false)
                                    setCS_CYSresults(false)
                                    setCS_DSresults(false)
                                    setCS_IoTresults(false)
                  }} className='text-dark'>
                    <h6>

                    Semester Results
                    <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>

                    </h6>

                  </Nav.Link>


                  {deptresults && (
            <div className="ms-3">

<Nav.Link onClick={()=>setITresults(!ITresults)}>
    <h6 className='text-dark'>
      Information Technology
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6>
</Nav.Link>


{ITresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/IT/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/IT/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/IT/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/IT/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/IT/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/IT/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/IT/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/results/IT/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}



<Nav.Link onClick={()=>setCSEresults(!CSEresults)}>
<h6 className='text-dark'>
      Computer Science
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6>
</Nav.Link>

{CSEresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/CSE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/CSE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CSE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CSE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CSE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CSE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CSE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/results/CSE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}



<Nav.Link onClick={()=>setAEresults(!AEresults)}>
<h6 className='text-dark'>
      Automobie
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6>
</Nav.Link>

{AEresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/AE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/AE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/AE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/AE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/AE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/AE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/AE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/results/AE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}


<Nav.Link onClick={()=>setCEresults(!CEresults)}>
<h6 className='text-dark'>
      Civil Engineering
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>

    {CEresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/CE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/CE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/results/CE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}




    <Nav.Link>
<h6 className='text-dark' onClick={()=>setECEresults(!ECEresults)}>
Electronics and Communication
<svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>


    {ECEresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/ECE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/ECE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/ECE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/ECE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/ECE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/ECE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/ECE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/results/ECE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}



<Nav.Link onClick={()=>setEEEresults(!EEEresults)}>
<h6 className='text-dark' >
Electrical and Electronics
<svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>

    {EEEresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/EEE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/EEE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/EEE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/EEE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/EEE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/EEE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/EEE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/results/EEE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}


<Nav.Link onClick={()=>setEIEresults(!EIEresults)}>
<h6 className='text-dark'>
Electronics and Instrumentation
<svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>
    {EIEresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/EIE/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/EIE/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/EIE/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/EIE/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/EIE/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/EIE/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/EIE/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/results/EIE/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}




<Nav.Link onClick={()=>setMEresults(!MEresults)}>
<h6 className='text-dark'>
      Mechanical
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>

    {MEresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/ME/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/ME/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/ME/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/ME/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/ME/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/ME/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/ME/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/results/ME/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}




    <Nav.Link onClick={()=>setCSBSresults(!CSBSresults)}>
<h6 className='text-dark'>
      CSBS
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>
    {CSBSresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/CSBS/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/CSBS/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CSBS/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CSBS/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CSBS/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CSBS/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CSBS/sem7'>
<h6 className='text-dark'>
      Sem7
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/results/CSBS/sem8'>
<h6 className='text-dark'>
      Sem8
    </h6></Nav.Link>





    
            </div>
          )}




<Nav.Link onClick={()=>setCS_AIMLresults(!CS_AIMLresults)}>
<h6 className='text-dark'>
      CS-AIML
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>
    {CS_AIMLresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/CS-AIML/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-AIML/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CS-AIML/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CS-AIML/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-AIML/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-AIML/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>



    
            </div>
          )}




    <Nav.Link onClick={()=>setCS_CYSresults(!CS_CYSresults)}>
<h6 className='text-dark'>
      CS-CYS
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>
    {CS_CYSresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/CS-CYS/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-CYS/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CS-CYS/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CS-CYS/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-CYS/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-CYS/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>







    
            </div>
          )}








<Nav.Link onClick={()=>setCS_IoTresults(!CS_IoTresults)}>
<h6 className='text-dark'>
      CS-IoT
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>
    {CS_IoTresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/CS-IoT/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-IoT/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CS-IoT/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CS-IoT/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-IoT/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-IoT/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>










    
            </div>
          )}



<Nav.Link onClick={()=>setCS_DSresults(!CS_DSresults)}>
<h6 className='text-dark'>
      CS-DS
      <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
    </h6></Nav.Link>

    {CS_DSresults && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/results/CS-DS/sem1'>
    <h6 className='text-dark'>
      Sem1
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-DS/sem2'>
<h6 className='text-dark'>
      Sem2
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CS-DS/sem3'>
<h6 className='text-dark'>
      Sem3
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/results/CS-DS/sem4'>
<h6 className='text-dark'>
      Sem4
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-DS/sem5'>
<h6 className='text-dark'>
      Sem5
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/results/CS-DS/sem6'>
<h6 className='text-dark'>
      Sem6
    </h6></Nav.Link>









    
            </div>
          )}



            </div>
          )}






                  <Nav.Link href="/admin/complaints" className='text-dark'>
                    <h6>

                    Complaints
                    </h6>

                  </Nav.Link>






                  <Nav.Link onClick={()=>
                    {setShowpostmessage(!showpostmessage)
                      setShowpostmessagedept(false)
                    }
                    } className='text-dark'>
                  <h6>
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {showpostmessage && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/admin/sendcollegemessage">
              <h6 className='text-dark'>
                  College Message
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/senddepartmentmessage">
                <h6 className='text-dark'>
                  Department Message
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setShowpostmessagedept(!showpostmessagedept)} >
              <h6 className='text-dark'>
                  Student Message
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                    </h6>
              </Nav.Link>


              {showpostmessagedept && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/sendstudentmessage/IT'>
    <h6 className='text-dark'>
      Information Technology
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/sendstudentmessage/CSE'>
<h6 className='text-dark'>
      Computer Science
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/sendstudentmessage/AE'>
<h6 className='text-dark'>
      Automobie
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/sendstudentmessage/CE'>
<h6 className='text-dark'>
      Civil Engineering
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/sendstudentmessage/ECE'>
<h6 className='text-dark'>
      Electronics and Communication
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/sendstudentmessage/EEE'>
<h6 className='text-dark'>
      Electrical and Electronics
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/sendstudentmessage/EIE'>
<h6 className='text-dark'>
      Electronics and Instrumentation
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/sendstudentmessage/ME'>
<h6 className='text-dark'>
      Mechanical
    </h6></Nav.Link>




    <Nav.Link as={Link} to='/admin/sendstudentmessage/CSBS'>
<h6 className='text-dark'>
      CSBS
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/sendstudentmessage/CS-AIML'>
<h6 className='text-dark'>
      CS-AIML
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/sendstudentmessage/CS-CYS'>
<h6 className='text-dark'>
      CS-CYS
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/sendstudentmessage/CS-IoT'>
<h6 className='text-dark'>
      CS-IoT
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/sendstudentmessage/CS-DS'>
<h6 className='text-dark'>
      CS-DS
    </h6></Nav.Link>





    
            </div>
          )}


            </div>
          )}




<Nav.Link onClick={()=>
                    {setShowmessage(!showmessage)
                      setShowmessagedept(false)}} className='text-dark'>
                  <h6>
                  Your Message
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {showmessage && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/admin/collegemessage">
              <h6 className='text-dark'>
                  College Message
                  </h6>
              </Nav.Link>

              <Nav.Link onClick={()=>setShowmessagedept(!showmessagedept)}>
              <h6 className='text-dark'>
                  Department Message
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
              </Nav.Link>


              {showmessagedept && (
            <div className="ms-3">

<Nav.Link as={Link} to='/admin/departmentmessage/IT'>
    <h6 className='text-dark'>
      Information Technology
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/admin/departmentmessage/CSE'>
<h6 className='text-dark'>
      Computer Science
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/departmentmessage/AE'>
<h6 className='text-dark'>
      Automobie
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/admin/departmentmessage/CE'>
<h6 className='text-dark'>
      Civil Engineering
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/departmentmessage/ECE'>
<h6 className='text-dark'>
      Electronics and Communication
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/departmentmessage/EEE'>
<h6 className='text-dark'>
      Electrical and Electronics
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/departmentmessage/EIE'>
<h6 className='text-dark'>
      Electronics and Instrumentation
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/departmentmessage/ME'>
<h6 className='text-dark'>
      Mechanical
    </h6></Nav.Link>




    <Nav.Link as={Link} to='/admin/departmentmessage/CSBS'>
<h6 className='text-dark'>
      CSBS
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/departmentmessage/CS-AIML'>
<h6 className='text-dark'>
      CS-AIML
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/departmentmessage/CS-CYS'>
<h6 className='text-dark'>
      CS-CYS
    </h6></Nav.Link>




<Nav.Link as={Link} to='/admin/departmentmessage/CS-IoT'>
<h6 className='text-dark'>
      CS-IoT
    </h6></Nav.Link>



<Nav.Link as={Link} to='/admin/departmentmessage/CS-DS'>
<h6 className='text-dark'>
      CS-DS
    </h6></Nav.Link>





    
            </div>
          )}


<Nav.Link as={Link} to="/admin/studentmessage">
                <h6 className='text-dark'>
                  Student Message
                  </h6>
              </Nav.Link>

            </div>
          )}




<Nav.Link as={Link} to="/admin/alumniapplications">
                <h6 className='text-dark'>
                  Alumni Applications
                  </h6>
              </Nav.Link>


              <Nav.Link as={Link} to="/admin/alumnievents">
                <h6 className='text-dark'>
                  Alumni Events
                  </h6>
              </Nav.Link>










              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>


<div style={{marginRight:'-7rem'}} className='col-1'>

</div>


<div style={{height:'40rem',overflowY:'scroll'}} className='col'>

        <Outlet/>
</div>

</div>



</div>
  )
}

export default AdminNavbar