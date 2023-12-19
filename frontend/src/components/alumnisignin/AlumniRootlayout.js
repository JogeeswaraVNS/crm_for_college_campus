import React from 'react'
import AlumniNavbar from './AlumniNavbar'
import { Outlet } from 'react-router-dom'

function AlumniRootlayout() {
  return (
    <div style={{marginTop:'-2rem'}}>
    <div className='px-3'>
      
    <div className='row'>


    <div style={{width:'15rem',overflowY:'scroll',height:'40rem'}} className='col-3 '>
        <AlumniNavbar/>
    </div>

    <div style={{marginRight:'-7.8rem'}} className='col-1'>

    </div>

    <div style={{overflowY:'scroll',height:'40rem'}} className='col'>
     <Outlet />
    </div>

    </div>


  </div></div>
  )
}

export default AlumniRootlayout