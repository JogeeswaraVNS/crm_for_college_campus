import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

function AlumniNavbar() {
  
  let Alumni=localStorage.getItem('AlumniID')
  useEffect(()=>{
    let Alumni=localStorage.getItem('AlumniID')

  },[Alumni])


  let [showalumni,setshowalumni]=useState(false)


  return (
    <div className=''>

<Navbar style={{textAlign:'left'}} expand="lg" className="ms-2">
        

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">


              <Nav.Link as={Link} to='/alumni' className='text-dark'>
                              <h6>
                                Alumni
                                </h6>
                  </Nav.Link>

                  <Nav.Link as={Link} to='/alumni/events' className='text-dark'>
                              <h6>
                              Alumni Events
                              </h6>
                  </Nav.Link>

                  
                  <Nav.Link as={Link} to='/alumni/ouralumni' className='text-dark'>
                              <h6>
                              Our Alumni
                              </h6>
                  </Nav.Link>


                  <Nav.Link as={Link} to='/alumni/register' className='text-dark'>
                              <h6>
                              Register
                              </h6>
                  </Nav.Link>



{Alumni?
<div>

<Nav.Link as={Link} to='/alumni/login'>
                              <h6 className='text-success'>
                              {Alumni}
                              </h6>
                  </Nav.Link>

                  </div>
                  :
                  <div>



                  <Nav.Link as={Link} to='/alumni/login' >
                              <h6 className='text-dark'>
                              Login
                              </h6>
                  </Nav.Link>

                  </div>

}


              </Nav>
            </Navbar.Collapse>

        </Navbar>

    </div>
  )
}

export default AlumniNavbar