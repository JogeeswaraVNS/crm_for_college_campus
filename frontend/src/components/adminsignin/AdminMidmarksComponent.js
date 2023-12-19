import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, Outlet } from 'react-router-dom';

function AdminMidmarksComponent(props) {


    // const [Data, setData] = useState([]);
    // const api=`http://127.0.0.1:5000/get/mid/${props.Department}/${props.Semester}`
    // console.log(api)

    // useEffect(() => {
    //     axios.get(api)
    //     .then(r=>setData(r.data))
    //     .then(console.log(Data))
    //     .catch(err=>console.log(err))
    // }, [api])



  return (
    <div>
              <Navbar expand="lg" className="bg-body-tertiary shadow mb-4 mt-3">
          <Container>
          <Link to={`/admin/midmarks/${props.Department}`} className='nav-link'>
                          <h4 className='ms-5 mt-2 department'>Semester</h4>
                      </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">

              <Nav.Link className='fw-bold fs-5 px-4 text-dark'>
                    <Link className='nav-link text-dark' to={`/admin/midmarks/${props.Department}/sem1`}>Sem1</Link>
                  </Nav.Link>
                  <Nav.Link className='fw-bold fs-5 px-4 text-dark'>
                    <Link className='nav-link text-dark' to={`/admin/midmarks/${props.Department}/sem2`}>Sem2</Link>
                  </Nav.Link>
                  <Nav.Link className='fw-bold fs-5 px-4 text-dark'>
                    <Link className='nav-link text-dark' to={`/admin/midmarks/${props.Department}/sem3`}>Sem3</Link>
                  </Nav.Link>
                  <Nav.Link className='fw-bold fs-5 px-4 text-dark'>
                    <Link className='nav-link text-dark' to={`/admin/midmarks/${props.Department}/sem4`}>Sem4</Link>
                  </Nav.Link>
                  <Nav.Link className='fw-bold fs-5 px-4 text-dark'>
                    <Link className='nav-link text-dark' to={`/admin/midmarks/${props.Department}/sem5`}>Sem5</Link>
                  </Nav.Link>
                  <Nav.Link className='fw-bold fs-5 px-4 text-dark'>
                    <Link className='nav-link text-dark' to={`/admin/midmarks/${props.Department}/sem6`}>Sem6</Link>
                  </Nav.Link>
                  <Nav.Link className='fw-bold fs-5 px-4 text-dark'>
                    <Link className='nav-link text-dark' to={`/admin/midmarks/${props.Department}/sem7`}>Sem7</Link>
                  </Nav.Link>
                  <Nav.Link className='fw-bold fs-5 px-4 text-dark'>
                    <Link className='nav-link text-dark' to={`/admin/midmarks/${props.Department}/sem8`}>Sem8</Link>
                  </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet/>
    </div>
  )
}

export default AdminMidmarksComponent