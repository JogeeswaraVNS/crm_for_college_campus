import React from 'react'
import me1 from './me1.png'



function ME() {
  return (
   <div  className='px-5'>



   <h3 style={{width:'25rem',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>Mechanical Engineering</h3>
   
   
   
   <div className='row'>
   
   <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
   <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
     
   The department was established at the time of inception of the institute in the year 1995. The department offers one undergraduate program - B.Tech. (Mechanical Engineering) and two post graduate programs - M.Tech in Advanced Manufacturing Systems and M.Tech. in CAD/CAM. Also, the department offers Ph.D. degree through AICTE-NDF scheme and JNTUH. The mechanical engineering department at the VNR VJIET is one of the top-ranked, attracting the highest quality of students and faculty members.
   
   
   </h5>
   </div>
   
   
   
   <div class="col p-0">
   <img src="https://vnrvjiet.ac.in/assets/images/Mech_Department_Inner.png" width="100%" alt="this image is not available"></img>   </div>
   
   
   </div>
   
   <h3 style={{width:'25rem',textAlign:'center',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>About the Department</h3>
   
   <div className='row'>
   
   <div class="col p-0">
   <img src={me1} width="100%" alt="this image is not available"></img>
   </div>
   
   <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
   <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
   
   Department of Mechanical Engineering is one of the oldest departments established at the time of inception of the institute in the year 1995. The department currently offers an undergraduate program - B.Tech. in Mechanical Engineering and two postgraduate programs - M.Tech. in Advanced Manufacturing Systems and M.Tech. in CAD/CAM. Department is recognized as ‘Research Center’ by the JNTU Hyderabad for offering Ph.D. program. The programs offered are intended to prepare students for successful careers and lifelong learning in Mechanical Engineering.
      </h5>
   </div>
   
   </div>
   
   <div className='my-4 row'>
   
   <div class="col-6">
   
     <div  className='row'>
   
   <div  className='col'>
   
     <div className='row'>
   
     <div className='col p-0'>
   
                  <img src="https://vnrvjiet.ac.in/assets/images/MECH%20Hod.png"
                 width="100%"
                 alt=""></img>
   
                 </div>
   
   <div style={{backgroundColor:'#82001a'}} className='col p-0 d-flex align-items-center text-white text-dark'>
   <h5 class="p-3">Dr. B. Satyanarayana
   <br></br>
   HOD of Mech
   mechhead@vnrvjiet.in
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

export default ME