import './Admissions.css'
import { useState,useEffect } from "react";
import React from 'react'
import axios from 'axios'

function Admissions() {

    let [Data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/get/departments').then(r=>setData(r.data))
        }
        ,[]);
  return (
    <div className="px-5 mt-5">

        <h1 className="admissions-h1">Admissions<svg className='ms-2 mb-2' xmlns="http://www.w3.org/2000/svg" fill='brown' height="40" viewBox="0 0 512 512"><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
</h1>


<div className='mt-4'>
<h5 style={{textAlign:'justify',lineHeight:'1.5'}} >Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNRVJIET), sponsored by Vignana Jyothi, was established in 1995 with the permission of All India Council for Technical Education (AICTE), New Delhi and the Government of (erstwhile) Andhra Pradesh. The Institute is autonomous under UGC and is affiliated to JNTU-Hyderabad and is recognised under Section 2(f) and 12 (B) of UGC Act, 1956. The Institute is accredited by NAAC with 'A++' Grade, rated “Diamond” by QS I-GAUGE, and is ISO 9001:2015 certified. The Institute offers 14 B.Tech. programmes,13 M.Tech. programmes, and 5 Ph.D. programmes. All eligible undergraduate programmes and four postgraduate programmes are accredited by the National Board of Accreditation (NBA). The tuition fees for all programmes are stipulated as per the Government Order by Telangana State which, under Convener Quota, is ₹1,35,000 per year for B.Tech. and ₹1,30,000 per year for M.Tech. programmes.
    </h5>


<div className='row'>

<div style={{backgroundColor:'#82001a'}} className='col ms-3 me-4 mt-4'>


<div style={{justifyContent:'space-around'}} className='d-flex text-white pt-2 pb-4'>

<h5 className='p-4' style={{textAlign:'justify',lineHeight:'1.5'}} >
VNRVJIET follows the relevant guidelines from the Government of Telangana State for admissions. Parents/ Students are strongly discouraged to not approach any agencies/ consultants that make fake commitments about admissions under Management Quota or any other pathway. The Institute and its Administration & Management are not responsible for any false commitments given by third-party agents.
</h5>




</div>




</div>

<div style={{backgroundColor:'#82001a',}} className='col ms-4 me-3 mt-4'>

    <h2 className='text-white pt-4'>For Further Details Contact Admissions</h2>

<div style={{justifyContent:'space-around'}} className='d-flex text-white pt-2 pb-4'>

    <div className='' style={{textAlign:'left'}}>

<h5>
    Coordinator Admissions
</h5>
    <h5>
    Senior office Assistant
    </h5>
    <h5>
    Skilled Assistant
    </h5>
    <h5>
    Phone numbers
    </h5>
    <h5>
    E-Mail
    </h5>

    </div>


    <div style={{textAlign:'left'}}>

    <h5>
    Dr.D.Kanthi Sudha
</h5>
    <h5>
    Mrs.Ch.Sailaja
    </h5>
    <h5>
    G.Rajkumar
    </h5>
    <h5>
    040-23044364
    </h5>
    <h5>
    admissions2023@vnrvjiet.in
    </h5>

    </div>

</div>




</div>

</div>


</div>

        {/* <a href='https://vnrvjiet.ac.in/assets/pdfs/IT_pdfs/Infrastructure.pdf'  target="_blank" rel="noopener noreferrer">click</a> */}
    <table style={{textAlign:'justify'}} className="table table-bordered table-hover mt-5 border-dark table-responsive-sm">
    
           <thead className='table-dark'>
                <tr>
                     <th>
                        <h5 className='p-2'>

                        Sno
                        </h5>
                        </th>
                     <th>
                        <h5 className='p-2'>

                        Year Established
                        </h5>
                        </th>
                     <th>
                        <h5 className='p-2'>

                        Name of the Course
                        </h5>
                        </th>
                     <th>
                        <h5 className='p-2'>

                        Course Code
                        </h5>
                        </th>
                     <th>
                        <h5 className='p-2'>

                        Intake
                        </h5>
                        </th>
                 </tr>
             </thead>
             <tbody>
               {
                    Data.map((d)=>(
                        <tr key={d.sno}>
                            <td>
                                <h5 className='p-2'>

                                {d.sno}
                                </h5>
                                </td>
                            <td>
                                <h5 className='p-2'>

                                {d.year_estd}
                                </h5>
                                </td>
                            <td>
                                <h5 className='p-2'>

                                {d.name_of_the_course}
                                </h5>
                            </td>
                            <td>
                                <h5 className='p-2'>

                                {d.course_code}
                                </h5>
                                </td>
                            <td>
                                <h5 className='p-2'>

                                {d.intake}
                                </h5>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
  )
}

export default Admissions