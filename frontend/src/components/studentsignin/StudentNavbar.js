import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
function StudentNavbar(props) {

  const [showcomplaints, setShowcomplaints] = useState(false);

  const [showmessage, setShowmessage] = useState(false);

  const [mid, setmid] = useState(false);

  const [sem, setsem] = useState(false);

  let [Name,setName]=useState('')

useEffect(() => {
  // axios.get(`http://127.0.0.1:5000/get/${props.Rollno}/`).then(r=>setDepartment(r.data)).catch(err=>console.log(err))
  axios.get(`http://127.0.0.1:5000/get/students/${props.Rollno}/`).then(r=>setName(r.data)).catch(err=>console.log(err))
}, [props.Rollno])





    let handleLogOut=()=>{
        localStorage.removeItem('Rollno')
        window.location.href='/student'
    }

  return (
    <div className='px-3'>


<div style={{display:'flex',justifyContent:'space-around',marginTop:'-2rem'}}>

<div style={{marginRight:'auto'}}>
<h3 className="fw-bold container text-dark">Welcome {Name}</h3>
</div>

<div style={{display:'flex',justifyContent:'flex-end'}}>
<Nav.Link href="/student/myprofile" className='fw-bold fs-5 px-3 text-dark'>
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

<div style={{height:'40rem',overflowY:'scroll',width:'18rem'}} className='col-3'>

<Navbar expand="lg" style={{textAlign:'left'}} className="">
        

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
              <Nav.Link href="/student/attendance" className='text-dark'>
                <h6>
                Attendance
                </h6>
              </Nav.Link>
              <Nav.Link onClick={()=>setmid(!mid)}>
                <h6 className='text-dark'>
                Mid Marks
                <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
                </h6>
              
                  </Nav.Link>


                  {mid && (
            <div className="ms-3">



<Nav.Link as={Link} to='/student/midmarks/sem1'>
    <h6 className='text-dark'>
    sem1
    </h6>
</Nav.Link>

<Nav.Link as={Link} to='/student/midmarks/sem2'>
    <h6 className='text-dark'>
    sem2
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/student/midmarks/sem3'>
    <h6 className='text-dark'>
    sem3
    </h6>
</Nav.Link>


<Nav.Link as={Link} to='/student/midmarks/sem4'>
    <h6 className='text-dark'>
    sem4
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/student/midmarks/sem5'>
    <h6 className='text-dark'>
    sem5
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/student/midmarks/sem6'>
    <h6 className='text-dark'>
    sem6
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/student/midmarks/sem7'>
    <h6 className='text-dark'>
    sem7
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/student/midmarks/sem8'>
    <h6 className='text-dark'>
    sem8
    </h6>
</Nav.Link>






    
            </div>
          )}


                  <Nav.Link onClick={()=>setsem(!sem)}>
                    <h6 className='text-dark'>
                    Semester Results
                    <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
                    </h6>
                  
                  </Nav.Link>


                  {sem && (
            <div className="ms-3">



<Nav.Link as={Link} to='/student/results/sem1'>
    <h6 className='text-dark'>
    sem1
    </h6>
</Nav.Link>

<Nav.Link as={Link} to='/student/results/sem2'>
    <h6 className='text-dark'>
    sem2
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/student/results/sem3'>
    <h6 className='text-dark'>
    sem3
    </h6>
</Nav.Link>


<Nav.Link as={Link} to='/student/results/sem4'>
    <h6 className='text-dark'>
    sem4
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/student/results/sem5'>
    <h6 className='text-dark'>
    sem5
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/student/results/sem6'>
    <h6 className='text-dark'>
    sem6
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/student/results/sem7'>
    <h6 className='text-dark'>
    sem7
    </h6>
</Nav.Link>



<Nav.Link as={Link} to='/student/results/sem8'>
    <h6 className='text-dark'>
    sem8
    </h6>
</Nav.Link>






    
            </div>
          )}



                  <Nav.Link onClick={()=>setShowcomplaints(!showcomplaints)}>
                    <h6 className='text-dark'>
                    Grievance
                    <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
                    </h6>
                  
                  </Nav.Link>


                  {showcomplaints && (
            <div className="ms-3">

<Nav.Link as={Link} to='/student/postcomplaints'>
    <h6 className='text-dark'>
    Post Complaint
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/student/mycomplaints'>
<h6 className='text-dark'>
My complaints
    </h6>
</Nav.Link>

    
            </div>
          )}




<Nav.Link onClick={()=>setShowmessage(!showmessage)}>
                    <h6 className='text-dark'>
                    Message
                    <svg xmlns="http://www.w3.org/2000/svg" className='ps-2 mb-1' height="1rem" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
                    </h6>
                  
                  </Nav.Link>


                  {showmessage && (
            <div className="ms-3">

<Nav.Link as={Link} to='/student/collegemessage'>
    <h6 className='text-dark'>
    College Message
    </h6>
</Nav.Link>




<Nav.Link as={Link} to='/student/departmentmessage'>
<h6 className='text-dark'>
Department Message
    </h6>
</Nav.Link>


<Nav.Link as={Link} to='/student/mymessage'>
<h6 className='text-dark'>
My Message
    </h6>
</Nav.Link>

    
            </div>
          )}


<Nav.Link href="/student/alumnievents" className='text-dark'>
                <h6>
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

export default StudentNavbar