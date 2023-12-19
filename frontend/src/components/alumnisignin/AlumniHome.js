import React, { useEffect, useState } from 'react'
import alumni7 from './alumni7-3.png'
import alumni10 from './alumni13.jpeg'
import alumni9 from './alumni9.png'
import alumni8 from './alumni8.png'
import alumni11 from './alumni11.jpeg'
import alumni12 from './alumni12.jpeg'
import alumni13 from './alumni14.jpeg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AlumniHome(props) {



  return (
    <div className='pb-5'>
      

<div style={{position:'relative'}}>
  <img width='100%' src={alumni7}></img>
      <div style={{position:'absolute',top:'20%',left:'15%'}} className=''>


<div style={{position:'relative',display:'inline'}}>

      <svg  xmlns="http://www.w3.org/2000/svg" fill='white' className='mx-4' height="100"  viewBox="0 0 384 512"><path d="M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384H290.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM264 320H120l72-172.8L264 320z"/></svg>

      <svg style={{position:'absolute',left:'25%',bottom:'155%'}} xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
</div>


      <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='mx-4' height="100" viewBox="0 0 320 512"><path d="M64 32c17.7 0 32 14.3 32 32V416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32z"/></svg>


      <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='mx-4' height="100" viewBox="0 0 384 512"><path d="M32 32c17.7 0 32 14.3 32 32V288c0 70.7 57.3 128 128 128s128-57.3 128-128V64c0-17.7 14.3-32 32-32s32 14.3 32 32V288c0 106-86 192-192 192S0 394 0 288V64C0 46.3 14.3 32 32 32z"/></svg>


      <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='mx-4' height="100" viewBox="0 0 448 512"><path d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 49.9 9.2 37.5 22.7 33.4z"/></svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='mx-4' height="100" viewBox="0 0 384 512"><path d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32V448c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 50.5 8.4 38.5 21.1 33.9z"/></svg>


      <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='mx-4' height="100" viewBox="0 0 320 512"><path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96h96V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V96h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 32z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill='black' className='mx-4' height="100" viewBox="0 0 448 512"><path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"/></svg>
                          
      </div>
</div>


<div className='row'>

  <div className='col-4'>
<img style={{borderRadius:'50%'}} className='p-3' src={alumni10} width="100%"></img>
  </div>


<div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'justify'}} className='col'>
<h3 className='pe-3'>
The alumni of VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET) form a distinguished and accomplished community that extends the rich legacy of the institution. VNRVJIET, known for its commitment to excellence in engineering and technology education, has produced a cadre of talented individuals who have gone on to make significant contributions in their respective fields.
</h3>
</div>


</div>


<div style={{marginTop:'-2rem'}} className='row'>

<div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'justify'}} className='col'>
<h3 className='ps-3'>
The alumni of VNRVJIET are a testament to the institution's commitment to nurturing not only technical proficiency but also fostering holistic development. They represent a diverse array of professionals, entrepreneurs, researchers, and leaders who have excelled in various industries and domains. Their journey from the corridors of VNRVJIET to the broader landscape of the professional world exemplifies the values instilled during their time at the institution.
</h3>
</div>

  <div className='col-4'>
<img className='p-3' src={alumni8} width="100%"></img>
  </div>




</div>


<div style={{marginTop:'-2rem'}} className='row'>

  <div className='col-4'>
<img style={{borderRadius:'50%'}} className='p-3' src={alumni11} width="100%"></img>
  </div>


<div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'justify'}} className='col'>
<h3 className='pe-3'>
The VNRVJIET alumni community is characterized by its spirit of innovation, resilience, and a shared commitment to making a positive impact on society. Graduates of VNRVJIET are known not only for their technical prowess but also for their ability to adapt to dynamic challenges, demonstrating a holistic approach to problem-solving
</h3>
</div>


</div>


<div style={{marginTop:'-2rem'}} className='row'>

<div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'justify'}} className='col'>
<h3 className='ps-3'>
This dynamic group of individuals actively engages with their alma mater, contributing to the growth and development of VNRVJIET in multifaceted ways. Alumni from VNRVJIET play pivotal roles as mentors, industry experts, and contributors to the academic and professional enrichment of current students. Through their achievements, they continue to enhance the reputation of VNRVJIET as a center of excellence in engineering education.
</h3>
</div>

  <div className='col-4'>
<img  className='p-3' src={alumni9} width="100%"></img>
  </div>




</div>



<div style={{marginTop:'-2rem'}} className='row'>

  <div className='col-4'>
<img className='p-3' style={{borderRadius:'50%'}} src={alumni12} width="100%"></img>
  </div>


<div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'justify'}} className='col'>
<h3 className='pe-3'>
The bonds formed at VNRVJIET extend beyond the classroom, creating a close-knit network that values collaboration, knowledge-sharing, and mutual support. As ambassadors of VNRVJIET, these alumni embody the institution's commitment to producing not just graduates but leaders and innovators who positively influence the world around them.
</h3>
</div>


</div>


<div style={{marginTop:'-2rem'}} className='row'>

<div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'justify'}} className='col'>
<h3 className='ps-3'>
In summary, the alumni of VNRVJIET are a source of inspiration and pride, embodying the institution's ethos of academic rigor, innovation, and a holistic approach to education. Their journeys serve as beacons for current students, illustrating the potential and possibilities that await those who embark on their educational journey at VNRVJIET.
</h3>
</div>

  <div className='col-4'>
<img style={{borderRadius:'50%'}} className='p-3' src={alumni13} width="100%"></img>
  </div>




</div>





<div>
  <h3>
    Want to Join our Alumni Community?
    <Link className='nav-link d-inline ps-2 text-primary' to='/alumni/register'>
    Join Here
    </Link>
  </h3>
</div>


    </div>
  )
}

export default AlumniHome