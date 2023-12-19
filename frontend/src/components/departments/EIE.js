import React from 'react'
import eie1 from './eie1.png'


function EIE() {
  return (
   <div  className='px-5'>



   <h3 style={{width:'40rem',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>Electronics and Instrumentation Engineering</h3>
   
   
   
   <div className='row'>
   
   <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
   <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
     
   The department of Electronics and Instrumentation Engineering(EIE) has been established with B.Tech in Electronics and Instrumentation Engineering (EIE) during the academic year 1999-2000 with an intake of 60 and has been enhanced to 120 during the academic year 2011-2012. Furthermore, M.Tech in Electronics and Instrumentation (E&I) was started during the academic year 2010-2011 with the approval of AICTE and JNTUH. BTech EIE students are eligible to opt for Minor Degree in AI-ML, Data Science, Cyber Security and Entrepreneurship.
   </h5>
   </div>
   
   
   
   <div class="col p-0">
   <img src="https://vnrvjiet.ac.in/assets/images/EIE_Department_Inner.png" width="100%" alt="this image is not available"></img>   </div>
   
   
   </div>
   
   <h3 style={{width:'25rem',textAlign:'center',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>About the Department</h3>
   
   <div className='row'>
   
   <div class="col p-0">
   <img src={eie1} width="100%" alt="this image is not available"></img>
   </div>
   
   <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
   <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
   
   Application of modern instrumentation techniques greatly enhances the Productivity, Quality, Reliability of the Products, with improved Stability, Safety and Optimization of Resources. All the major R&D organizations like DRDO, ISRO, BARC, NRSC etc. require the services of talented young instrumentation engineers for all their R&D activities involving highly sophisticated instrumentation systems, for all their R&D activities involving highly sophisticated instrumentation systems.
   </h5>
   </div>
   
   </div>
   
   <div className='my-4 row'>
   
   <div class="col-6">
   
     <div  className='row'>
   
   <div  className='col'>
   
     <div className='row'>
   
     <div className='col p-0'>
   
                  <img src="https://vnrvjiet.ac.in/assets/images/EIE%20Hod.png"
                 width="100%"
                 alt=""></img>
   
                 </div>
   
   <div style={{backgroundColor:'#82001a'}} className='col p-0 d-flex align-items-center text-white text-dark'>
   <h5 class="p-3">Dr. R. Manjula Sri
   <br></br>
   HOD of EIE
   eiehead@vnrvjiet.in
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

export default EIE