import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import './Departmentsh1.css'
import { NavDropdown } from 'react-bootstrap';

function DepartmentsNavbar() {
  const [IT, setIT] = useState(false);
  const [ITSem, setITSem] = useState(false);

  const [AE, setAE] = useState(false);
  const [AESem, setAESem] = useState(false);

  const [CE, setCE] = useState(false);
  const [CESem, setCESem] = useState(false);

  const [CS_AIML, setCS_AIML] = useState(false);
  const [CS_AIMLSem, setCS_AIMLSem] = useState(false);

  const [CS_CYS, setCS_CYS] = useState(false);
  const [CS_CYSSem, setCS_CYSSem] = useState(false);

  const [CS_DS, setCS_DS] = useState(false);
  const [CS_DSSem, setCS_DSSem] = useState(false);

  const [CS_IoT, setCS_IoT] = useState(false);
  const [CS_IoTSem, setCS_IoTSem] = useState(false);

  const [CSBS, setCSBS] = useState(false);
  const [CSBSSem, setCSBSSem] = useState(false);

  const [CSE, setCSE] = useState(false);
  const [CSESem, setCSESem] = useState(false);

  const [ECE, setECE] = useState(false);
  const [ECESem, setECESem] = useState(false);

  const [EEE, setEEE] = useState(false);
  const [EEESem, setEEESem] = useState(false);

  const [EIE, setEIE] = useState(false);
  const [EIESem, setEIESem] = useState(false);

  const [ME, setME] = useState(false);
  const [MESem, setMESem] = useState(false);



  return (
    <div className=''>


<Navbar expand="lg" className="flex-column">
        
                          <h4 className='m-3 department'>Departments
                          </h4>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{textAlign:'justify'}} className="me-auto flex-column">
              <Nav.Link onClick={()=>
                    {setIT(!IT)
                      setITSem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  Information Technology
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {IT && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/IT/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/IT/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setITSem(!ITSem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{ITSem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/IT/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/IT/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/IT/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/IT/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/IT/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/IT/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/IT/sem7">
                <h6 className='text-dark'>
                  Sem7
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/IT/sem8">
              <h6 className='text-dark'>
                  Sem8
                  </h6>
              </Nav.Link>
            </div>
          )}


<Nav.Link onClick={()=>
                    {setCSE(!CSE)
                      setCSESem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  Computer Science
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {CSE && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/CSE/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSE/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setCSESem(!CSESem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{CSESem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/CSE/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSE/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSE/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSE/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSE/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSE/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSE/sem7">
                <h6 className='text-dark'>
                  Sem7
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSE/sem8">
              <h6 className='text-dark'>
                  Sem8
                  </h6>
              </Nav.Link>
            </div>
          )}


<Nav.Link onClick={()=>
                    {setAE(!AE)
                      setAESem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  Automobile
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {AE && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/AE/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/AE/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setAESem(!AESem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{AESem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/AE/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/AE/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/AE/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/AE/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/AE/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/AE/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/AE/sem7">
                <h6 className='text-dark'>
                  Sem7
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/AE/sem8">
              <h6 className='text-dark'>
                  Sem8
                  </h6>
              </Nav.Link>
            </div>
          )}


<Nav.Link onClick={()=>
                    {setCE(!CE)
                      setCESem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  Civil Engineering
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {CE && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/CE/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CE/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setCESem(!CESem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{CESem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/CE/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CE/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CE/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CE/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CE/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CE/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CE/sem7">
                <h6 className='text-dark'>
                  Sem7
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CE/sem8">
              <h6 className='text-dark'>
                  Sem8
                  </h6>
              </Nav.Link>
            </div>
          )}


<Nav.Link onClick={()=>
                    {setECE(!ECE)
                      setECESem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  Electronics and Communication
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {ECE && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/ECE/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ECE/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setECESem(!ECESem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{ECESem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/ECE/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ECE/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ECE/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ECE/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ECE/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ECE/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ECE/sem7">
                <h6 className='text-dark'>
                  Sem7
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ECE/sem8">
              <h6 className='text-dark'>
                  Sem8
                  </h6>
              </Nav.Link>
            </div>
          )}


<Nav.Link onClick={()=>
                    {setEEE(!EEE)
                      setEEESem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  Electrical and Electronics
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {EEE && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/EEE/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EEE/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setEEESem(!EEESem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{EEESem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/EEE/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EEE/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EEE/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EEE/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EEE/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EEE/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EEE/sem7">
                <h6 className='text-dark'>
                  Sem7
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EEE/sem8">
              <h6 className='text-dark'>
                  Sem8
                  </h6>
              </Nav.Link>
            </div>
          )}


<Nav.Link onClick={()=>
                    {setEIE(!EIE)
                      setEIESem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  Electronics and Instrumentation
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {EIE && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/EIE/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EIE/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setEIESem(!EIESem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{EIESem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/EIE/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EIE/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EIE/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EIE/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EIE/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EIE/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EIE/sem7">
                <h6 className='text-dark'>
                  Sem7
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/EIE/sem8">
              <h6 className='text-dark'>
                  Sem8
                  </h6>
              </Nav.Link>
            </div>
          )}


<Nav.Link onClick={()=>
                    {setME(!ME)
                      setMESem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  Mechanical
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {ME && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/ME/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ME/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setMESem(!MESem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{MESem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/ME/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ME/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ME/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ME/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ME/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ME/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ME/sem7">
                <h6 className='text-dark'>
                  Sem7
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/ME/sem8">
              <h6 className='text-dark'>
                  Sem8
                  </h6>
              </Nav.Link>
            </div>
          )}



<Nav.Link onClick={()=>
                    {setCSBS(!CSBS)
                      setCSBSSem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  CSBS
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {CSBS && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/CSBS/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSBS/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setCSBSSem(!CSBSSem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{CSBSSem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/CSBS/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSBS/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSBS/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSBS/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSBS/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSBS/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSBS/sem7">
                <h6 className='text-dark'>
                  Sem7
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CSBS/sem8">
              <h6 className='text-dark'>
                  Sem8
                  </h6>
              </Nav.Link>
            </div>
          )}


<Nav.Link onClick={()=>
                    {setCS_AIML(!CS_AIML)
                      setCS_AIMLSem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  CS-AIML
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {CS_AIML && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/CS-AIML/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-AIML/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setCS_AIMLSem(!CS_AIMLSem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{CS_AIMLSem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/CS-AIML/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-AIML/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-AIML/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-AIML/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-AIML/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-AIML/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>

            </div>
          )}


<Nav.Link onClick={()=>
                    {setCS_CYS(!CS_CYS)
                      setCS_CYSSem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  CS-CYS
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {CS_CYS && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/CS-CYS/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-CYS/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setCS_CYSSem(!CS_CYSSem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{CS_CYSSem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/CS-CYS/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-CYS/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-CYS/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-CYS/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-CYS/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-CYS/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>


            </div>
          )}




<Nav.Link onClick={()=>
                    {setCS_IoT(!CS_IoT)
                      setCS_IoTSem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  CS-IoT
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {CS_IoT && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/CS-IoT/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-IoT/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setCS_IoTSem(!CS_IoTSem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{CS_IoTSem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/CS-IoT/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-IoT/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-IoT/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-IoT/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-IoT/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-IoT/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>
            </div>
          )}




<Nav.Link onClick={()=>
                    {setCS_DS(!CS_DS)
                      setCS_DSSem(false)
                    }} className='fw-bold fs-5'>
                  <h6>
                  CS-DS
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  </h6>
                  </Nav.Link>
                  {CS_DS && (
            <div className="ms-3">
              <Nav.Link as={Link} to="/departments/CS-DS/about">
                <h6 className='text-dark'>
                  About
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-DS/faculty">
              <h6 className='text-dark'>
                  Faculty
                  </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setCS_DSSem(!CS_DSSem)}>
              <h6 className='text-dark'>
                  Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                  
                  </h6>
              </Nav.Link>
            </div>
          )}
{CS_DSSem && (
            <div className="ms-5">
              <Nav.Link as={Link} to="/departments/CS-DS/sem1">
                <h6 className='text-dark'>
                  Sem1
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-DS/sem2">
              <h6 className='text-dark'>
                  Sem2
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-DS/sem3">
                <h6 className='text-dark'>
                  Sem3
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-DS/sem4">
              <h6 className='text-dark'>
                  Sem4
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-DS/sem5">
                <h6 className='text-dark'>
                  Sem5
                  </h6>
              </Nav.Link>
              <Nav.Link as={Link} to="/departments/CS-DS/sem6">
              <h6 className='text-dark'>
                  sem6
                  </h6>
              </Nav.Link>

            </div>
          )}







              </Nav>
            </Navbar.Collapse>
          
        </Navbar>

    </div>
  )
}

export default DepartmentsNavbar