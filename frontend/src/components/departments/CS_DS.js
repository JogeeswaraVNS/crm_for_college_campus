import React from 'react'
import ds1 from './ds1.png'

function CS_DS() {
  return (
    <div  className='px-5'>


    <div style={{width:'40rem',display:'block',margin:'auto',backgroundColor:'#82001a'}}>
    
        <h3  className='py-2 text-white my-4'>Computer Science and Engineering
        <br></br>
        (Data Science)</h3>
        
        
    </div>
        
        <div className='row'>
        
        <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
        <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
          
        Welcome to the Department of CSE- DS, CyS. This department is established in 2020 with the DS and CyS B.Tech. program with the intake of 120 and 60 respectively and in the year 2021 started with the AI & DS B.Tech. program with a intake of 60. This department is dedicated to explore the fascinating fields of Data Science, AI, and Cyber Security issues equipping the students with the knowledge and skills to excel in these rapidly evolving domains.
        The Department provides internships, real-world projects, and networking events. 
        </h5>
        </div>
        
        
        
        <div class="col p-0">
        <img src="https://vnrvjiet.ac.in/assets/images/CSE%20-%20DS%20&%20CYS%20(1).png" width="100%" alt="this image is not available"></img>   </div>
        
        
        </div>
        
        <h3 style={{width:'25rem',textAlign:'center',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>About the Department</h3>
        
        <div className='row'>
        
        <div class="col p-0">
        <img src={ds1} width="100%" alt="this image is not available"></img>
        </div>
        
        <div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
        <h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>

        The department is involved in pioneering research and supports research activities both for teachers and students. We promote a culture of innovation, encouraging students and faculty members to explore new ideas, conduct research projects, and publish their findings in reputable journals and conferences and explore themselves in cutting-edge technologies like Image Processing, Augmented Reality, Data Analytics, Cyber Forensic, Malware analysis etc.          
          </h5>
        </div>
        
        </div>
        
        <div className='my-4 row'>
        
        <div class="col-6">
        
          <div  className='row'>
        
        <div  className='col'>
        
          <div className='row'>
        
          <div className='col p-0'>
        
                       <img src="https://vnrvjiet.ac.in/assets/images/Dr-Rajasekar-M.png"
                      width="100%"
                      alt=""></img>
        
                      </div>
        
        <div style={{backgroundColor:'#82001a'}} className='col p-0 d-flex align-items-center text-white text-dark'>
        <h5 class="p-3">Dr. Rajasekar M.
        <br></br>
        HOD of CS-CYS & DS
csehead.dscs@vnrvjiet.in
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

export default CS_DS