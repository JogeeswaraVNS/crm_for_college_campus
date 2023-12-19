import React from 'react'
import ce1 from './ce1.png'


function AE() {
  return (
    <div  className='px-5'>



<h3 style={{width:'25rem',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>Automobile Engineering</h3>



<div className='row'>

<div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
<h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>
  
The department of automobile engineering commenced with an undergraduate programme in the year 2010. Keeping itself up-to-date with the latest developments in the field with a dedicated team of highly qualified and experienced faculty in various streams of automobile engineering, the department consistently strives to provide world-class facilities for education and research.


</h5>
</div>



<div class="col p-0">
                        <img src="https://vnrvjiet.ac.in/assets/images/Automobile_Department_Inner.png" width="100%" alt="this image is not available"></img>
</div>


</div>

<h3 style={{width:'25rem',textAlign:'center',display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-2 text-white my-4'>About the Department</h3>

<div className='row'>

<div class="col p-0">
                        <img src={ce1} width="100%" alt="this image is not available"></img>                     
</div>

<div style={{backgroundColor:'#82001a'}} className='col d-flex align-items-center p-0'>
<h5 style={{textAlign:'justify',height:''}} className='text-white px-4'>

The department has laboratories with modern and state-of-the-art equipment, well-furnished seminar hall and a library with a collection of various journals, magazines and books.
Industry training and identifying industry relevant problems for research is a special characteristic of the programme offered by the department. Faculty members are continually publishing the results of their research work as technical papers in international and national journals and conferences.

</h5>
</div>

</div>

<div className='my-4 row'>

<div class="col-6">

  <div  className='row'>

<div  className='col'>

  <div className='row'>

  <div className='col p-0'>

               <img src="https://vnrvjiet.ac.in/assets/images/AME%20Hod.png"
              width="100%"
              alt=""></img>

              </div>

<div style={{backgroundColor:'#82001a'}} className='col p-0 d-flex align-items-center text-white text-dark'>
<h5 class="p-3">Dr. T. Srinivasa Rao
<br></br>
HOD of AE
aehead@vnrvjiet.in</h5>
</div>

  </div>

</div>

               </div>

              </div>

</div>

    </div>
  )
}

export default AE