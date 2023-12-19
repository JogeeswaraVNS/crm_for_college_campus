import React from 'react'
import eee1 from './eee1.png'

function EEE() {
  return (
   <div  className='px-5'>



   <h3 style={{width:'35rem',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>Electrical and Electronics Engineering</h3>
   
   
   
   <div className='row'>
   
   <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
   <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
     
   The Department of Electrical & Electronics Engineering offers U.G and P.G programs in Electrical Engineering Discipline. The department has a rich tradition of teaching and research and is widely recognized to be a pioneer in Electrical Engineering Education. The Department is recognized as a Research Centre in Electrical and Electronics Engineering. The research work in the department is vibrant with the support of eminent professors like Dr.M.Rama Moorthy, former Director General, CPRI taking a keen interest in guiding the faculty members.
   
   </h5>
   </div>
   
   
   
   <div class="col p-0">
   <img src="https://vnrvjiet.ac.in/assets/images/EEE_Department_Inner.png" width="100%" alt="this image is not available"></img>   </div>
   
   
   </div>
   
   <h3 style={{width:'25rem',textAlign:'center',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>About the Department</h3>
   
   <div className='row'>
   
   <div class="col p-0">
   <img src={eee1} width="100%" alt="this image is not available"></img>
   </div>
   
   <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
   <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
   
   The research interests of the faculty members encompass a wide gamut of sub-disciplines of Electrical Engineering. The Department takes pride in its ability to nurture students who win gold medals at the university level consistently. We also take up the social responsibility of inculcating awareness about Energy Conservation by promoting programs about the same. Collaboration with industries for timely amendments of curriculum and laboratories is another credential of the department.
   
   </h5>
   </div>
   
   </div>
   
   <div className='my-4 row'>
   
   <div class="col-6">
   
     <div  className='row'>
   
   <div  className='col'>
   
     <div className='row'>
   
     <div className='col p-0'>
   
                  <img src="https://vnrvjiet.ac.in/assets/images/EEE%20Hod.png"
                 width="100%"
                 alt=""></img>
   
                 </div>
   
   <div style={{backgroundColor:'#82001a'}} className='col p-0 d-flex align-items-center text-white text-dark'>
   <h5 class="p-3">Dr. Poonam Upadhyay
   <br></br>
   HOD of EEE
   eeehead@vnrvjiet.in
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

export default EEE