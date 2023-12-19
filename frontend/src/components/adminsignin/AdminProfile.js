import Card from 'react-bootstrap/Card';
import { Modal, ModalTitle, ModalHeader, ModalBody,ModalFooter} from 'react-bootstrap';
import axios from 'axios';
import React from 'react';



class AdminProfile extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {AdminID:this.props.AdminID,Res:'',Name:'',OldPassword:'',NewPassword:'',Confirm:'',Show:false,showpassword:false};
    
        this.changePassword=this.changePassword.bind(this);
        this.getDetails=this.getDetails.bind(this);
        this.handleoldpasswordchange=this.handleoldpasswordchange.bind(this)
        this.handlenewpasswordchange=this.handlenewpasswordchange.bind(this)
        this.handleconfirmnewpasswordchange=this.handleconfirmnewpasswordchange.bind(this)
    }

    componentDidMount() {
        this.getDetails();
     }
     
     getDetails = () => {
      axios.get(`http://127.0.0.1:5000/get/admins/${this.props.AdminID}/`).then(r=>this.setState({Name:r.data})).catch(err=>console.log(err))
     };

    


    //changepaswrd
    changePassword(event){

        if(this.state.OldPassword==='' || this.state.NewPassword==='' || this.state.Confirm===''){
            // this.setState({empty:true})
            this.setState({Show:false})
        }
        else{

        if(this.state.NewPassword===this.state.Confirm){
            this.setState({empty:false})

            axios.put('http://127.0.0.1:5000/admin/update',this.state)
            .then(r=>this.setState({Res:r.status}))
            .catch(e=>this.setState({Res:e.response.status}))

        }

        this.setState({Show:false})
        }
        event.preventDefault()

    }

    handleoldpasswordchange(event){
        this.setState({OldPassword:event.target.value})
    }

    handlenewpasswordchange(event){
        this.setState({NewPassword:event.target.value})
    }

    handleconfirmnewpasswordchange(event){
        this.setState({Confirm:event.target.value})
    }

    // //savepswrd
    savePassword(){
        this.setState({Show:false})
        console.log(this.state.OldPassword,this.state.NewPassword,this.state.Confirm)
    }


    render(){
  return (
    

    <div className='mt-5'>
            <div>
<h4 className='mt-2'>Welcome to Your Profile, {this.state.Name}</h4>

<div style={{width:'70%',display:'block',margin:'auto'}} className='mt-4'>
      <div style={{backgroundColor:'#82001a'}} className="card text-white px-4 pt-3 mt-3">
        <h3 className="mb-3">{this.state.Name}</h3>
        <p className="">
          <strong>Admin ID :</strong> {this.state.AdminID}
        </p>
      </div>
</div>


{
                    this.state.Res===200 && <h3 className='text-success mt-4'>Your Password is Changed</h3>
                }
                {
                    this.state.Res===401 && <h3 className='text-danger mt-4'>Old Password is Incorrect</h3>
                }


<button className='btn btn-warning my-4' onClick={()=>this.setState({Show:true})}>
            <svg xmlns="http://www.w3.org/2000/svg" fill='black' className='mb-1 me-1' height="25" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
            <h5 className='d-inline p-2'>Change Password</h5>
            </button>


</div>


        <Modal 
            show={this.state.Show}
            backdrop="static"
            centered
            className='modal'>
            <ModalHeader>
                <ModalTitle>Change Password
                <svg xmlns="http://www.w3.org/2000/svg" fill='black' className='mb-2 ms-2' height="25" viewBox="0 0 448 512"><path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z"/></svg>
            
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
            <form onSubmit={this.changePassword} autoComplete='off' class="display-block mx-auto">
                <div class="mb-3">
                    <label htmlFor="oldpassword" className="form-label fw-semibold">Old Password</label>
                    <input onChange={this.handleoldpasswordchange}
                    type={this.state.showpassword===true?"text":"password"}                   
                    name="oldpassword" id="oldpassword" className="form-control" placeholder='Enter Old Password'/>

                    <input type='checkbox' id='check' label='Show Password' onClick={()=>this.setState({showpassword:!this.state.showpassword})}/>

                    <label htmlFor="check" className="form-label p-1 mt-2 fw-semibold">Show Password</label>

                </div>
                <div class="mb-3">
                    <label htmlFor="newpassword" className="form-label fw-semibold">New Password</label>
                    <input onChange={this.handlenewpasswordchange} 
                    type={this.state.showpassword===true?"text":"password"}   
                    name="newpassword" id="newpassword" className="form-control" placeholder='Enter New Password'/>
                </div>
                <div class="mb-3">
                    <label htmlFor="newconpassword" className="form-label fw-semibold">Confirm New Password</label>
                    <input onChange={this.handleconfirmnewpasswordchange} 
                    type={this.state.showpassword===true?"text":"password"}   
                    name="newconpassword" id="newconpassword" className="form-control" placeholder='Confirm New Password'/>
                </div>
                {
                    this.state.NewPassword!==this.state.Confirm && <div>
                        <h6 className='text-danger'>Confirm Password should match with New Password</h6>
                    </div>
                }

                <button className='btn btn-danger mt-2 me-3 mb-2' onClick={()=>this.setState({Show:false})}>
                <svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
<h6 className='ms-2 d-inline'>Cancel</h6>
                </button>
                <button className='btn btn-success mt-2 me-3 mb-2' type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <h6 className='ms-2 d-inline'>Save</h6>
                </button>



            </form>
            </ModalBody>
        </Modal>
    </div>
  )
}
}

export default AdminProfile