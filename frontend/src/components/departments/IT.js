import React from 'react'
import IT2 from './IT2.png'



function IT() {
  return (
    <div  className='px-5'>



<h3 style={{width:'25rem',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>Information Technology</h3>



<div className='row'>

<div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
<h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
  
  The department of Information Technology was established in the year 1997 with an annual intake of 60, increased to 180 in the year 2017. M.Tech(CNIS) Programme started in the year 2013 with an intake of 18.
It has all infrastructural facilities required for imparting high quality education and the department is fully structured to meet the contemporary needs of the industry. Imparting high quality education is supported by well qualified and experienced faculty, further support is extended by technically skilled and competent programmers.
  
</h5>
</div>



<div class="col p-0">
                        <img src="https://vnrvjiet.ac.in/assets/images/IT_Department_Inner.png" width="100%" alt="this image is not available"></img>
</div>


</div>

<h3 style={{width:'25rem',textAlign:'center',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>About the Department</h3>

<div className='row'>

<div class="col p-0">
                        <img src={IT2} width="100%" alt="this image is not available"></img>                     
</div>

<div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
<h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
Seminars, Workshops and Technical Symposia are conducted in the department to keep faculty and students updated with latest developments in various technologies. The students in the department are moulded as the best software professionals to meet the industry demand. The department of IT is controlling and monitoring CAMPUS NETWORK CONTROL CENTER. Which provides internet, lan, Wi-Fi network through out the campus, VJIM and Hostels.
</h5>
</div>

</div>

<div className='my-4 row'>

<div class="col-6">

  <div  className='row'>

<div  className='col'>

  <div className='row'>

  <div className='col p-0'>

               <img src="https://vnrvjiet.ac.in/assets/images/Dr-D-Srinivasa%20Rao.jpg"
              width="100%"
              alt=""></img>

              </div>

<div style={{backgroundColor:'#82001a'}} className='col p-0 d-flex align-items-center text-white text-dark'>
<h5 class="p-3">Dr.D. Srinivasa Rao
<br></br>
HOD of IT
ithead@vnrvjiet.in</h5>
</div>

  </div>

</div>

               </div>

              </div>

</div>

    </div>
  )
}

export default IT