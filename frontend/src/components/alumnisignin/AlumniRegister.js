import { Modal, ModalTitle, ModalBody, ModalFooter} from 'react-bootstrap';
import axios from 'axios';
import React from 'react'


class AlumniRegister extends React.Component {
    constructor(props) 
    {
        super(props);
        this.state = {
            Name:'',
            RollNo:'',
            Department:'',
            YOJ:'',
            YOP:'',
            AlumniID:'',
            Password:'',
            ConfirmPassword:'',
            Purpose:'',
            check:'',
            showmodal:false,
            Departments : [
                { value: 'CE', label: 'Civil Engineering - CE' },
                { value: 'EEE', label: 'Electrical and Electronics Engineering - EEE' },
                { value: 'ME', label: 'Mechanical Engineering - ME' },
                { value: 'ECE', label: 'Electronics and Communication Engineering - ECE' },
                { value: 'CSBS', label: 'Computer Science and Business Systems - CSBS' },
                { value: 'EIE', label: 'Electronics and Instrumentation Engineering - EIE' },
                { value: 'IT', label: 'Information Technology - IT' },
                { value: 'AE', label: 'Automobile Engineering - AE' },
                { value: 'CSE', label: 'Computer Science and Engineering - CSE' },
                { value: 'CS-AIML', label: 'Computer Science and Engineering (Artificial Intelligence and Machine Learning) - CS-AIML' },
                { value: 'CS-DS', label: 'Computer Science and Engineering (Data Science) - CS-DS' },
                { value: 'CS-CYS', label: 'Computer Science and Engineering (Cyber Security) - CS-CYS' },
                { value: 'CS-IoT', label: 'Computer Science and Engineering (Internet of Things) - CS-IoT' },
              ],
            showpassword:false
        };

            this.handleChangeName = this.handleChangeName.bind(this);
            this.handleChangeRollNo = this.handleChangeRollNo.bind(this);
            // this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
            this.handleChangeYOJ = this.handleChangeYOJ.bind(this);
            this.handleChangeYOP = this.handleChangeYOP.bind(this);
            this.handleChangeAlumniID = this.handleChangeAlumniID.bind(this);
            this.handleChangePassword = this.handleChangePassword.bind(this);
            this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
            this.handleChangePurpose = this.handleChangePurpose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }
    
        handleChangeName(event){
            this.setState({Name:event.target.value})
        }


        handleChangeRollNo(event){
            this.setState({RollNo:event.target.value})
        }



        handleChangeYOJ(event){
            this.setState({YOJ:event.target.value})
        }



        handleChangeYOP(event){
            this.setState({YOP:event.target.value})
        }



        
        
        handleChangeAlumniID(event) {
            this.setState({AlumniID: event.target.value});
        }
        handleChangePassword(event) {
            this.setState({Password: event.target.value});
        }


        handleChangeConfirmPassword(event){
            this.setState({ConfirmPassword:event.target.value})
        }



        handleChangePurpose(event){
            this.setState({Purpose:event.target.value})
        }



        
        
        handleSubmit (event) {
            axios.post('http://127.0.0.1:5000/alumni/application',this.state)
            .then(e=>this.setState({check:e.data}))
            .catch(e=>this.setState({check:e.response.status}))
        };
            
        handleDropdownChange (event) {
                this.setState({Department:event.target.value});
              };





    render() {
      return (
        <div className='px-5 pb-5'>

            
{

    this.state.check===200?
    <div>
        <h4 className='text-success'>Your Application is Successfully Sent</h4>
    </div>

    :


            <div className="">
                <h3 className="text-center text-dark my-3"><strong>Alumni Registration</strong></h3>

                <h5>
                Welcome back to our Alumni community! We're excited to reconnect with you. To register as an alumnus, please fill out the form below with your information:
                </h5>



                <Modal 
            show={this.state.showmodal}
            backdrop="static"
            centered
            className='modal-lg'>

                    <div style={{display:'flex',justifyContent:'space-around'}}>


<div style={{marginRight:'auto'}}>
<ModalTitle className='ps-3 pt-3'>
                        Review your Application

                </ModalTitle>
</div>
                        
                        <div style={{display:'flex',justifyContent:'flex-end'}}>
                <button className='btn-close pt-5 pe-5' type='button' onClick={()=>this.setState({showmodal:false})}>
                
                </button>
                        </div>

                        </div>

            <ModalBody style={{marginTop:'-1.5rem'}}>


{this.state.Name===''?
<h5 className='text-danger'>Name Cannot be empty</h5>
:

                <h5>Name : {this.state.Name}</h5>

}


{this.state.RollNo===''?
<h5 className='text-danger'>Roll No Cannot be empty</h5>
:

                <h5>Roll No : {this.state.RollNo}</h5>

}


{this.state.Department===''?
<h5 className='text-danger'>Department Cannot be empty</h5>
:

                <h5>Department : {this.state.Department}</h5>

}


{this.state.YOJ===''?
<h5 className='text-danger'>Year Of Join Cannot be empty</h5>
:

                <h5>Year Of Join : {this.state.YOJ}</h5>

}


{this.state.YOP===''?
<h5 className='text-danger'>Year Of Pass Cannot be empty</h5>
:

                <h5>Year Of Pass : {this.state.YOP}</h5>

}


{this.state.AlumniID===''?
<h5 className='text-danger'>User Name Cannot be empty</h5>
:

                <h5>User Name : {this.state.AlumniID}</h5>

}



{this.state.Purpose===''?
<h5 className='text-danger'>Purpose Cannot be empty</h5>
:

                <h5>Your Purpose : {this.state.Purpose}</h5>

}




              </ModalBody>


<ModalFooter>

                {
    (this.state.Name===''
    ||this.state.RollNo===''
    ||this.state.Department===''
    ||this.state.YOJ===''
    ||this.state.YOP===''
    ||this.state.AlumniID===''
    ||this.state.Password===''
    ||this.state.ConfirmPassword===''
    ||this.state.Purpose===''
    )?
    null:
    <div>
{
    this.state.Password!==this.state.ConfirmPassword?
    <div>
        <h5 className='d-inline text-danger ms-2'>Password and Confirm Password Must Match</h5>
        </div>
        :
        <button className='btn btn-success mb-3' onClick={this.handleSubmit}>
<svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <h6 className='d-inline ms-2'>Submit</h6>
        </button>
}    </div>
}
</ModalFooter>


        </Modal>




                <div style={{backgroundColor:'#703db4'}}>


            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} className="mt-4 p-5">


                <form className='rounded border bg-white border-dark' style={{width:'75%',padding:'3rem'}} autoComplete='off'>



<div className='row'>

<div className='col-auto'>
                  <h5 className='mt-1'>
                    Name
                    </h5> 
                    </div>

                    <div className="col">
                        <input 
                            className="form-control border-dark" 
                            type="text" 
                            id="Name"
                            placeholder="Name"
                            value={this.state.Name} onChange={this.handleChangeName}
                        />
                    </div>

                    </div>



                    <div className='row mt-4'>

<div className='col-auto'>
                  <h5 className='mt-1'>
                    Roll No
                    </h5> 
                    </div>

                    <div className="col">
                        <input 
                            className="form-control border-dark" 
                            type="text" 
                            id="RollNo"
                            placeholder="Roll No"
                            value={this.state.RollNo} onChange={this.handleChangeRollNo}
                        />
                    </div>

                    </div>





                    <div className='row mt-4'>

<div className='col-auto'>
                  <h5 className='mt-1'>
                    Department
                    </h5> 
                    </div>

                    <div className="col-auto">

                        {/* <input 
                            className="form-control border-dark" 
                            type="text" 
                            id="Department"
                            placeholder="Department"
                            value={this.state.Department} onChange={this.handleChangeDepartment}
                        /> */}

     


      <select style={{width:'34rem',padding:'0.3rem'}} id="dropdown" value={this.state.Department} onChange={this.handleDropdownChange}>
        <option value="" disabled>Select Your Department</option>
        {this.state.Departments.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>


                    </div>

                    </div>




                    <div className='row'>


<div className='col'>

  <div className='row'>

  <div style={{marginTop:'0.3rem'}} className='col'>

                    <h5 className='mt-4' style={{textAlign:'left'}}>
                    Year Of Join
                    </h5> 
                    </div>


                    <div className="col mt-4">
                        <input 
                            className="form-control border-dark" 
                            type="text"
                            id="YearOfJoin"
                            placeholder="Eg:1995"
                            value={this.state.YOJ} onChange={this.handleChangeYOJ}
                        />
                    </div>

                    </div>
</div>



<div className='col'>

  <div className='row'>

<div style={{marginTop:'0.3rem'}} className='col'>
                    <h5 className='mt-4' style={{textAlign:'left'}}>
                    Year of Pass
                    </h5> 
                    </div>


                    <div className="col mt-4">
                        <input 
                            className="form-control border-dark" 
                            type="text"
                            id="YearofPass"
                            placeholder="Eg:1999"
                            value={this.state.YOP} onChange={this.handleChangeYOP}
                        />
                    </div>


                    </div>

</div>


</div>



<div className='row mt-4'>

<div className='col-auto'>
                  <h5 className='mt-1'>
                    User Name
                    </h5> 
                    </div>

                    <div className="col">
                        <input 
                            className="form-control border-dark" 
                            type="text" 
                            id="UserName"
                            placeholder="User Name"
                            value={this.state.AlumniID} onChange={this.handleChangeAlumniID}
                        />
                    </div>

                    </div>  



                    <div className='row mt-4'>

<div className='col-auto'>
                  <h5 className='mt-1'>
                    Password
                    </h5> 
                    </div>

                    <div className="col">
                        <input 
                            className="form-control border-dark" 
                            type={this.state.showpassword===true?"text":"password"}
                            id="Password"
                            placeholder="Password"
                            value={this.state.Password} onChange={this.handleChangePassword}
                        />
                    </div>

                    <div className='col-auto'>

                      {this.state.showpassword===true?

<div>
  <div className='btn' onClick={()=>this.setState({showpassword:false})}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
    </div>
</div>
                    :
<div>
  <div className='btn' onClick={()=>this.setState({showpassword:true})}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>
</div>
</div>
                      }

                    </div>

                    </div>



                    <div className='row mt-4'>

<div className='col-auto'>
                  <h5 className='mt-1'>
                    Confirm Password
                    </h5> 
                    </div>

                    <div className="col">
                        <input 
                            className="form-control border-dark" 
                            type={this.state.showpassword===true?"text":"password"}
                            id="ConfiemPassword"
                            placeholder="ConfirmPassword"
                            value={this.state.ConfirmPassword} onChange={this.handleChangeConfirmPassword}
                        />
                    </div>

                    </div>






<div>

<h5 className='ps-1 pb-2 pt-4' style={{textAlign:'left'}}>
State Your Purpose
                    </h5> 

<textarea 
                className="form-control border-dark mt-2" 
                id="complaints" rows="5" placeholder='State Your Purpose'
                value={this.state.Purpose} onChange={this.handleChangePurpose}
                >
            </textarea>
</div>



                </form>
            </div>


                        <button style={{marginTop:'-1.5rem',marginBottom:'2rem'}}
                            className="btn btn-primary btn-block" onClick={()=>this.setState({showmodal:true})} type="button">
                                <h6 className='d-inline'>Register</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='ms-2' height="25" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                            </button>
                    </div>
        </div>
}


        </div>
      );
    }
}  
export default AlumniRegister