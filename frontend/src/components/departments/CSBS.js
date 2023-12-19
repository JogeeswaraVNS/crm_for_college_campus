import React from 'react'
import csbs1 from './csbs1.png'


function CSBS() {
  return (
    <div  className='px-5'>



<h3 style={{width:'35rem',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>
   Computer Science and Business Systems</h3>



<div className='row'>

<div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
<h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
  
The Department of Computer Science and Engineering (CSE), established in the year 1995, evolved towards enhancing Computing and its applications to build the intellectual capital of the society. The department is witnessing a period of exciting growth and opportunity propelled by the growth of technology and its recognition through excellence.
</h5>
</div>



<div class="col p-0">
                        <img src="https://vnrvjiet.ac.in/assets/images/CSE_Department_Inner.png.png" width="100%" alt="this image is not available"></img>
</div>


</div>

<h3 style={{width:'25rem',textAlign:'center',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>About the Department</h3>

<div className='row'>

<div class="col p-0">
                        <img src={csbs1} width="100%" alt="this image is not available"></img>                     
</div>

<div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
<h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>



The Department of Computer Science & Engineering (CSE) started in 1995 is a renowned department for its capacity in R&D aside from its regular academics . B.Tech CSE is NBA Accredited and is recognized as a Research Center by JNTUH. The department offers 2 UG programmes: B.Tech CSE and B.Tech CSBS (Computer Science and Business Systems). It also offers 2 PG programmes: MTech- Software Engineering (SE) and M.Tech-Computer Science and Engineering (CSE).



</h5>
</div>

</div>

<div className='my-4 row'>

<div class="col-6">

  <div  className='row'>

<div  className='col'>

  <div className='row'>

  <div className='col p-0'>

               <img src="https://vnrvjiet.ac.in/assets/images/CSE%20Hod.png"
              width="100%"
              alt=""></img>

              </div>

<div style={{backgroundColor:'#82001a'}} className='col p-0 d-flex align-items-center text-white text-dark'>
<h5 class="p-3">Dr. S. Nagini
<br></br>
HOD of CSE & CSBS

csehead@vnrvjiet.in
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

export default CSBS