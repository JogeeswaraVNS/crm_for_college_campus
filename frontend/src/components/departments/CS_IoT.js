import React from 'react'
import iot1 from './iot1.png'


function CS_IoT() {
  return (
   <div  className='px-5'>


   <div style={{width:'40rem',display:'block',margin:'auto',backgroundColor:'#82001a'}}>
   
       <h3  className='py-2 text-white my-4'>Computer Science and Engineering 
       <br></br>
       (Internet of Things)</h3>
       
       
   </div>
       
       <div className='row'>
       
       <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
       <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
         
       The Department of CSE- Artificial Intelligence and Machine Learning (AIML) and Internet of Things (IoT) stands at the forefront of innovation, shaping a future that transcends boundaries and revolutionizes the way we interact with technology. The Department of CSE -AIML & IoT started in the year 2020, offers 2 UG courses namely B. Tech- CSE (AIML) and B. Tech-CSE (IoT). B. Tech-CSE (AIML) started with an intake of 60 students and eventually increased to 180 in 2021.

           
       </h5>
       </div>
       
       
       
       <div class="col p-0">
       <img src="https://vnrvjiet.ac.in/assets/images/CSE%20-%20AI,%20ML%20&%20DS.png" width="100%" alt="this image is not available"></img>   </div>
       
       
       </div>
       
       <h3 style={{width:'25rem',textAlign:'center',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>About the Department</h3>
       
       <div className='row'>
       
       <div class="col p-0">
       <img src={iot1} width="100%" alt="this image is not available"></img>
       </div>
       
       <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
       <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
       Currently we are having an overall intake of 180 in AIML. B. Tech-CSE (IoT) has an intake of 60 students.
       By seamlessly integrating the physical and digital worlds, IoT creates an intricate network of intelligent endpoints that generate a vast ocean of data. The department guides the students to harness the data generated through various devices, sensors and also work on real time datasets to unlock the new possibilities facilitating intelligent decision-making. The students are encouraged to work on real-time monitoring projects across diverse domains. 
         </h5>
       </div>
       
       </div>
       
       <div className='my-4 row'>
       
       <div class="col-6">
       
         <div  className='row'>
       
       <div  className='col'>
       
         <div className='row'>
       
         <div className='col p-0'>
       
                      <img src="https://vnrvjiet.ac.in/assets/images/AI-ML-IoT-hod.png"
                     width="100%"
                     alt=""></img>
       
                     </div>
       
       <div style={{backgroundColor:'#82001a'}} className='col p-0 d-flex align-items-center text-white text-dark'>
       <h5 class="p-3">Dr. N. Sandhya
       <br></br>
       HOD of CS-AIML & IoT
       csehead.aimliot@vnrvjiet.in
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

export default CS_IoT