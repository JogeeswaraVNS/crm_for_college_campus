// import './DepartmentsRootlayout.css'
import React from 'react'
import DepartmentsNavbar from './DepartmentsNavbar'
import { Outlet } from 'react-router-dom'

function DepartmentsRootlayout() {
  return (
    <div style={{marginTop:'-3rem'}}>
      
    <div className=''>

<div className='row mx-5'>

    <div style={{marginLeft:'-3.5rem',height:'45rem',overflowY:'scroll'}} className='col-3'>
        <DepartmentsNavbar/>
    </div>
    <div style={{marginRight:'-4rem'}} className='col-1'>

    </div>
    <div style={{height:'45rem',overflowY:'scroll',marginRight:'-3rem',marginLeft:'-4rem'}} className='col'>
     <Outlet />
    </div>
</div>

    </div>


  </div>
  )
}

export default DepartmentsRootlayout