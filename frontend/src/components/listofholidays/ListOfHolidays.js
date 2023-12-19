import './ListOfHolidays.css'
import { useState,useEffect } from "react";
import React from 'react'
import axios from 'axios'

function ListOfHolidays() {

    let [Data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/get/loh').then(r=>setData(r.data))
        }
        ,[]);
  return (
    <div style={{marginTop:'-1.5rem'}} className="container">
        <h2 className="loh-h1">List Of Holidays for the Calendar Year - 2023
        <svg xmlns="http://www.w3.org/2000/svg" fill='brown' className='ms-2 mb-2' height="35" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
</h2>
<table style={{textAlign:'justify'}} className="table border-dark table-bordered table-hover table-responsive-sm mt-3">
      <thead className='table-dark'>

                <tr>
                     <th>
                     <h5 className='p-3'>
                        Holiday
                        </h5>
                        </th>
                     <th>
                     <h5 className='p-3'>
                        Holiday Date
                        </h5>
                        </th>
                     <th>
                     <h5 className='p-3'>
                        Holiday Day
                        </h5>
                        </th>
                 </tr>
             </thead>
             <tbody>
               {
                    Data.map((d,i)=>(
                        <tr key={i}>
                            <td>
                            <h5 className='p-3'>
                                {d.holiday}
                                </h5>
                                </td>
                            <td>
                            <h5 className='p-3'>
                                {d.holiday_date}
                                </h5>
                                </td>
                            <td>
                            <h5 className='p-3'>
                                {d.holiday_day}
                                </h5>
                                </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <h2 className="mt-4" style={{marginBottom:'-2.5rem'}}>Every 2nd Saturday in a month is observed as a Holiday</h2>

    </div>
  )
}

export default ListOfHolidays