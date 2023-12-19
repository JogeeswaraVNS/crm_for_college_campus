import React from 'react'
import ece1 from './ece2.png'

function ECE() {
  return (
   <div  className='px-5'>



   <h3 style={{width:'40rem',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>Electronics and Communication Engineering</h3>
   
   
   
   <div className='row'>
   
   <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
   <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
     
   The Department of ECE was founded in 1995 and is recognized by JNTU Hyderabad as a centre for R&D activities. The research Centre is of internationally acclaimed standards, predominantly in the areas of Communications, Signal Processing, Microelectronics and IoT. The Department has 59 well qualified and experienced faculty with 14 doctorates and 33 faculty are pursuing their doctoral degrees. Most of the faculties are associated with Research and Consultancy Cell (RCC).
   </h5>
   </div>
   
   
   
   <div class="col p-0">
   <img src="https://vnrvjiet.ac.in/assets/images/ECE_Department_Inner.png" width="100%" alt="this image is not available"></img>   </div>
   
   
   </div>
   
   <h3 style={{width:'25rem',textAlign:'center',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>About the Department</h3>
   
   <div className='row'>
   
   <div class="col p-0">
   <img src={ece1} width="100%" alt="this image is not available"></img>
   </div>
   
   <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
   <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
   
   Presently, the Department has an intake of 240 Students for UG programme and an intake of 18 students for PG programme in VLSI System Design and Embedded Systems respectively. The department indulges in cutting edge research in the areas of Sensor Networks, Wireless Networks, Wireless Communications, Internet of Things, Cognitive Radio, Speech/Audio, Video and Biomedical Signal Processing.
   </h5>
   </div>
   
   </div>
   
   <div className='my-4 row'>
   
   <div class="col-6">
   
     <div  className='row'>
   
   <div  className='col'>
   
     <div className='row'>
   
     <div className='col p-0'>
   
                  <img src="https://vnrvjiet.ac.in/assets/images/ece-hod.png"
                 width="100%"
                 alt=""></img>
   
                 </div>
   
   <div style={{backgroundColor:'#82001a'}} className='col p-0 d-flex align-items-center text-white text-dark'>
   <h5 class="p-3">Dr. S. Rajendra Prasad
   <br></br>
   HOD of ECE
   ecehead@vnrvjiet.in
   </h5>
   </div>
   
     </div>
   
   </div>
   
                  </div>
   
                 </div>
   
   </div>
   
       </div>
  )
}

export default ECE