import axios from 'axios';
import React, { Component } from 'react';
import { Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';



class AlumniSignedInHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Data: [],
        Date: '',
        Time: '',
        Venue: '',
        Title: '',
        Description: '',
        PhoneNo: '',
        Email: '',
        AlumniID: props.AlumniID,
        showmodal:false,
        response:'',
      selectedButtonIndex: null,
    };

    this.handleEventTitle = this.handleEventTitle.bind(this);
    this.handleEventEmail = this.handleEventEmail.bind(this);
    this.handleEventPhoneNo = this.handleEventPhoneNo.bind(this);
    this.handleEventDescription = this.handleEventDescription.bind(this);
    this.handleEventSubmition = this.handleEventSubmition.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/alumni/availableevents')
      .then(response => this.setState({ Data:response.data }))
      .catch(error => console.log(error));
  }

  handleEventTitle(event) {
    this.setState({Title:event.target.value})
  }

  handleEventEmail(event) {
    this.setState({Email:event.target.value})
  }

  handleEventPhoneNo(event) {
    this.setState({PhoneNo:event.target.value})
  }

  handleEventDescription(event) {
    this.setState({Description:event.target.value})
  }

  handleEventSubmition() {
    axios.post('http://127.0.0.1:5000/alumni/event',this.state)
    .then(response => this.setState({ response: response.data }))
    .catch(error => console.log(error));
  }

  render() {
    // const { Data, Event, selectedButtonIndex } = this.state;

  return (
    <div>


<Modal 
            show={this.state.showmodal}
            backdrop="static"
            centered
            className='modal-lg'>

                    <div style={{display:'flex',justifyContent:'space-around'}}>


<div style={{marginRight:'auto'}}>
<ModalTitle className='ps-3 pt-3'>
                        Review your Event

                </ModalTitle>
</div>
                        
                        <div style={{display:'flex',justifyContent:'flex-end'}}>
                <button className='btn-close pt-5 pe-5' type='button' onClick={()=>this.setState({showmodal:false})}>
                
                </button>
                        </div>

                        </div>

            <ModalBody style={{marginTop:'-1.5rem'}}>


{this.state.Title===''?
<h5 className='text-danger'>Title Cannot be empty</h5>
:

                <h5>Title : {this.state.Title}</h5>

}


{this.state.Email===''?
<h5 className='text-danger'>Email Cannot be empty</h5>
:

                <h5>Email : {this.state.Email}</h5>

}


{this.state.PhoneNo===''?
<h5 className='text-danger'>PhoneNo Cannot be empty</h5>
:

                <h5>Phone No : {this.state.PhoneNo}</h5>

}




{this.state.Date===''?
<h5 className='text-danger'>Date Cannot be empty</h5>
:

                <h5>Date : {this.state.Date}</h5>

}


{this.state.Time===''?
<h5 className='text-danger'>Time Cannot be empty</h5>
:

                <h5>Time : {this.state.Time}:00</h5>

}


{this.state.Venue===''?
<h5 className='text-danger'>Venue Cannot be empty</h5>
:

                <h5>Venue : {this.state.Venue}</h5>

}


{this.state.AlumniID?
<h5>Alumni Name : {this.state.AlumniID}</h5>
:

<h5 className='text-danger'>Alumni Name Cannot be empty. Reload the Window</h5>

}



{this.state.Description===''?
<h5 className='text-danger'>Description Cannot be empty</h5>
:

                <h5>Your Description : {this.state.Description}</h5>

}




              </ModalBody>


<ModalFooter>

                {
    (this.state.Title===''
    ||this.state.Email===''
    ||this.state.PhoneNo===''
    ||this.state.Date===''
    ||!this.props.AlumniID
    ||this.state.Time===''
    ||this.state.Venue===''
    ||this.state.Description===''
    )?
    null:
    <div>

<button className='btn btn-success mb-3' onClick={()=>{
  this.setState({showmodal:false})
  this.handleEventSubmition()
  }}>
<svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <h6 className='d-inline ms-2'>Submit</h6>
        </button>

   </div>
}
</ModalFooter>


        </Modal>


<div style={{textAlign:'justify'}}>
    <h2 style={{textAlign:'center'}} className='mb-3'>Alumni-Organized Events</h2>
    <p style={{fontSize:'1.2rem'}}>
      Dear Esteemed VNRVJIET Alumni, welcome to our Alumni-Organized Events page! We invite you to actively contribute to the student experience by organizing events that share your expertise, foster connections, and impact lives.
    </p>
    <p style={{fontSize:'1.2rem'}}>
    We extend a heartfelt invitation to you to become key contributors to the vibrant student experience at our alma mater. As proud alumni of VNRVJIET, your wealth of experiences and insights can play a pivotal role in shaping the educational journey of our current students.
    </p>
    <p style={{fontSize:'1.2rem'}}>
    Our Alumni-Organized Events initiative is a unique opportunity for you to take the lead in creating meaningful experiences for the next generation. We believe in the power of alumni-driven events to inspire, guide, and connect with our students in impactful ways.
    </p>
    <p style={{fontSize:'1.2rem'}}>
      Explore the opportunities below and consider proposing event ideas or taking an active role in planning and executing events. Your involvement will help create meaningful experiences for the current student body.
    </p>

<div className='card p-3'>

    <p style={{fontSize:'1.2rem'}}><strong>Why Get Involved?</strong></p>

    <p style={{fontSize:'1.2rem'}}><strong>Share Your Expertise:</strong> Leverage your professional journey to provide valuable insights and mentorship.</p>

<p style={{fontSize:'1.2rem'}}><strong>Foster Connections:</strong> Create networking opportunities that bridge the gap between academia and the professional world.</p>

<p style={{fontSize:'1.2rem'}}><strong>Impact Lives:</strong> Organize events that leave a lasting impression on students, helping shape their academic and personal growth.</p>

</div>

<div className='card p-3 mt-3'>
<p style={{fontSize:'1.2rem'}}><strong>How You Can Contribute:</strong></p>

<p style={{fontSize:'1.2rem'}}><strong>Event Ideas:</strong> Propose innovative event ideas that align with your expertise and can benefit students.</p>

<p style={{fontSize:'1.2rem'}}><strong>Event Planning:</strong> Take an active role in planning and executing events, ensuring they resonate with the current student body.</p>

<p style={{fontSize:'1.2rem'}}><strong>Networking Opportunities:</strong> Facilitate connections between students and industry professionals, creating pathways to success.</p>
</div>

<div className='mt-3' style={{fontSize:'1.2rem'}}>
  <p>
  We encourage you to explore the possibilities, share your passion, and make a lasting impact on the lives of our students. Your involvement in organizing events will contribute to the legacy of VNRVJIET and strengthen the bonds that make our alumni community truly exceptional.
  </p>
  <p>
  To get started or share your event ideas, please reach out to our Alumni Relations Team. Let's work together to create experiences that inspire and empower the leaders of tomorrow.
  </p>
  <p><strong>Warm regards,</strong></p>
  <p><strong>VNRVJIET Alumni Relations Team.</strong></p>
</div>

<hr></hr>

{this.state.response===200?
<div>
        <h4 className='text-success'>Your Event is Successfully Submitted. You can view in Your Profile</h4>
    </div>
:
<div>
  <h4 style={{textAlign:'center'}}>You can Organise Events Here</h4>


  <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'-2rem'}} className="p-5">


<form className='rounded border bg-white border-dark' style={{width:'75%',padding:'3rem'}} autoComplete='off'>



<div className='row'>

<div className='col-auto'>
  <h5 className='mt-1'>
    Event Title
    </h5> 
    </div>

    <div className="col">
        <input 
            className="form-control border-dark" 
            type="text" 
            id="EventTitle"
            placeholder="Event Title"
            value={this.state.Title} onChange={this.handleEventTitle}
        />
    </div>

    </div>



    <div className='row mt-4'>

<div className='col-auto'>
  <h5 className='mt-1'>
    Your Email
    </h5> 
    </div>

    <div className="col">
        <input 
            className="form-control border-dark" 
            type="text" 
            id="Email"
            placeholder="Email"
            value={this.state.Email} onChange={this.handleEventEmail}
        />
    </div>

    </div>



<div className='row mt-4'>

<div className='col-auto'>
  <h5 className='mt-1'>
    Your Phone No
    </h5> 
    </div>

    <div className="col">
        <input 
            className="form-control border-dark" 
            type="text" 
            id="PhoneNo"
            placeholder="Phone No"
            value={this.state.PhoneNo} onChange={this.handleEventPhoneNo}
        />
    </div>

    </div>  


    <h5 className='pb-2 pt-4' style={{textAlign:'left'}}>
Date, Time & Venue : </h5> 

<div style={{height:'25rem',overflowY:'scroll'}}>

{this.state.Data.filter(d => d.status === 'Available').map((d, index) => (
        <div className='' key={index}>
          <div
            className={`card px-4 pt-3 mt-3 btn ${
              this.state.selectedButtonIndex === index ? 'text-white bg-success' : ''
            }`}
            onClick={() => {
              this.setState({Date:d.date,Time:d.time,Venue:d.venue,selectedButtonIndex:index})
            }}
          >
            <div className='row'>
              <p className='col-2'>{d.date}</p>
              <p className='col-2'>
                {d.time < 12 && `${d.time}:00AM`}
                {d.time == 12 && `${d.time}:00PM`}
                {d.time > 12 && `${d.time - 12}:00PM`}
              </p>
              <p className='col-auto'>{d.venue}</p>
            </div>
          </div>
        </div>
      ))}

</div>

{this.state.Date&&
  <div className='mt-4'>
  <h5>Selected Time Slot
  </h5>
  <p>
  Date : {this.state.Date}, Time : {this.state.Time}:00 & Venue : {this.state.Venue}
  </p>
</div>}

<div>

<h5 className='pb-2 pt-2' style={{textAlign:'left'}}>
Event Description
    </h5> 

<textarea 
className="form-control border-dark mt-2" 
id="complaints" rows="5" placeholder='Enter Event Description'
value={this.state.Description} onChange={this.handleEventDescription}
>
</textarea>
</div>



</form>
</div>

<button style={{marginTop:'-1.5rem',marginBottom:'2rem',display:'block',margin:'auto'}}
                            className="btn btn-primary btn-block" onClick={()=>this.setState({showmodal:true})} type="button">
                                <h6 className='d-inline'>Register</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='ms-2' height="25" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                            </button>



</div>
  }
  </div>



    </div>
  )
}
}

export default AlumniSignedInHome;