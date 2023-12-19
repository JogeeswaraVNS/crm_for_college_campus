import './RootLayout.css'
import React from 'react'
import {Outlet} from 'react-router-dom' 
import CrmNavbar from './navbar/CrmNavBar'
import Footer from './footer/Footer'
// import Complaints from './complaints/Complaints'
function RootLayout() {
  return (
    <div className=''>
      <div style={{height:'4rem'}}>
        <CrmNavbar/>
      </div>
        {/* <StudentComplaints R/> */}
        <div className='outlet mb-5 mt-5'>
        <Outlet/>
        </div>
        <Footer/>

    </div>
  )
}

export default RootLayout