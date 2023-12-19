import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';


function AdminMessageStudent(props) {
  const [userinfo, setUserInfo] = useState({
    rolls: [],
    response: [],
  });
  
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { rolls } = userinfo;
      
    console.log(`${value} is ${checked}`);
     
    if (checked) {
      setUserInfo({
        rolls: [...rolls, value],
        response: [...rolls, value],
      });
    }
  
    else {
      setUserInfo({
        rolls: rolls.filter((e) => e !== value),
        response: rolls.filter((e) => e !== value),
      });
    }
  };

  let [Dept,setDept]=useState('d')

  let [Rollno,setRollno]=useState('')

  let [RollnoData,setRollnoData]=useState([])

  let [Data,setData]=useState({
    AdminID:props.AdminID,
    Message:'',
    Res:'',
    })

  let {Res}=Data;

  useEffect(()=>{
      setUserInfo({
        rolls: [],
        response: [],
      });
    axios.get(`http://127.0.0.1:5000/get/studentsdept/${props.Department}/`)
    .then(r=>setRollnoData(r.data))
    .catch(err=>console.log(err))
  },[props.Department])

  function AdminDepthandleChangeMessage(event){
    setData({Message:event.target.value})
  }

  function AdminDepthandleSubmit(event){
    alert('Posting Message to '+userinfo.response)
    axios.post(`http://127.0.0.1:5000/admin/${props.AdminID}/message/student/`,{Response:userinfo.response,
    Message:Data.Message
  })
    .then(e=>setData({Res:e.status}))
    .then(window.location.reload())
    .catch(e=>setData({Res:e.response.status}))
    console.log(Data)
    console.log(Dept)
    event.preventDefault()
  }

  return (
    <div>


        <Outlet/>

                {

                  props.Department===undefined?
                  <div>
                    {props.Department}
                  </div>:

                  <div>

<div className="">
        <div className="">
          <h3 className="form-head-contact-h3">

          </h3>

                <div className=''>


                <h4 style={{display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-3 text-white my-4'>
                Post a Message <span>
            <svg xmlns="http://www.w3.org/2000/svg" className='mb-1' fill='#ffc107'  height="30" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              </span> to {props.Department} Student(s)
              </h4>


          <div className="form-floating mt-3 mb-3 text-center">

              <textarea
                className="form-control text"
                name="response"
                value={userinfo.response.length === 0 ? "Select the Student(s) to post a message to Selected Student(s)" : userinfo.response}
                placeholder="Selecting Students"
                id="floatingTextarea2"
                style={{ height: "150px" }}
                onChange={handleChange}
              ></textarea>
            </div>
</div>

          <form>
            <div style={{textAlign:'justify'}} className="row">
              <div className="col-3">
{

RollnoData.map((d,i)=>(

  <div key={i}>

                <div style={{height:'2rem'}} className="m-3">
                <label
                    htmlFor="flexCheckDefault"
                  >
                    <h6>{d.rollno}</h6>
                  </label>

                </div>
</div>
  
))


}

              </div>

              <div className="col-6">
{

RollnoData.map((d,i)=>(

  <div key={i}>

                <div style={{height:'2rem'}} className="m-3">

                  <label
                    htmlFor="flexCheckDefault"
                  >
                      <h6>{d.name}</h6>
                  </label>
                </div>
</div>
  
))

}
              </div>
              <div className="col">
{

RollnoData.map((d,i)=>(

  <div key={i}>

                <div style={{height:'3rem'}} className="p-3">
                  <input style={{transform:'scale(1.5)'}}
                    className=""
                    type="checkbox"
                    name="languages"
                    value={d.rollno}
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                </div>
</div>
  
))

}

              </div>
            </div>
          </form>

<div className='d-flex my-2' style={{justifyContent:'space-evenly'}}>
          <div>
  <h5>Selected : {userinfo.response.length}</h5>
</div>
<div>
  <h5>Not Selected : {30-userinfo.response.length}</h5>
</div>
</div>
        </div>
      </div>

      </div>

}

              {
                RollnoData.length===0?
                null:
                <div className=''>

<div className='container mx-auto'>
            {Res===200 && <h3 className='text-success mb-5 p-3'>Message Sent Successfully. You can view your Message in Your Department Messages</h3>}
            {Res===401 && <h3 className='text-danger mb-5 p-3'>Message Cannot be Empty/Message Already Sent</h3>}
          <form onSubmit={AdminDepthandleSubmit}>
            <textarea 
                className="form-control w-50 mx-auto" 
                id="message" cols="10" rows="5" placeholder='Write a ṃessage'
                value={Data.Message} onChange={AdminDepthandleChangeMessage}
                >
            </textarea>
            <div className="form-group">
                {/* <button className="btn mt-4 btn-warning" type="submit">Post Message</button> */}
                <button className="btn mt-5 btn-warning" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'black'}} height="25" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                  <h5 className='d-inline p-2'>Post Message</h5></button>
            </div>
          </form>
        </div>

              </div>
}


    </div>
  )
}

export default AdminMessageStudent