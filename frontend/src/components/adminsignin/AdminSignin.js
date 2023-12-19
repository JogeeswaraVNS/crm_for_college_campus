import './AdminSignin.css'
import axios from 'axios';
import React from 'react'
import Admindashnav from './Admindashnav';

class AdminSignin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {AdminID:'',Password:'',check:'',showpassword:false};
    
        this.handleChangeAdminID = this.handleChangeAdminID.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkLogin=this.checkLogin.bind(this)
      }
      componentDidMount() {
          this.checkLogin();
       }
       checkLogin = () => {
           const Login=localStorage.getItem('AdminID')
           console.log(Login)
           if (Login!=null){
               this.setState({AdminID:Login,check:200})
            }
            else{
                this.setState({check:''})
            }
            console.log(this.state)
        };
        
        
        handleChangeAdminID(event) {
            this.setState({AdminID: event.target.value});
        }
        handleChangePassword(event) {
            this.setState({Password: event.target.value});
        }
        
        handleSubmit (event) {
            axios.post('http://127.0.0.1:5000/admin/login',this.state)
            .then(e=>this.setState({check:e.status}))
            .catch(e=>this.setState({check:e.response.status}))
            event.preventDefault();
            



    }
  
    render() {
      return (
        <div style={{marginBottom:'-3rem'}}>
            {(this.state.check===200)?
            <div>
                {localStorage.setItem('AdminID',this.state.AdminID)}
                {/* <h1>Welcome {this.state.AdminID}</h1> */}
                <Admindashnav AdminID={this.state.AdminID}/>
            </div>
            :            
            <div className="signin-photo">
                <h3 style={{marginTop:'-5.5rem',marginBottom:'2.5rem'}}
                className={this.state.check===401?"text-danger":"text-white"}
                >Use Valid Admin ID and Password To Login</h3>
            <div className="form-container">
                <div className="img-holder"></div>
                {/* <form onSubmit={SubmitForm}> */}
                <form onSubmit={this.handleSubmit} autoComplete='off'> 
                <h3 className="text-center text-white mb-4"><strong>Admin </strong>account</h3>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            id="AdminID"
                            placeholder="Admin ID"
                            value={this.state.AdminID} onChange={this.handleChangeAdminID}
                            // {...register("Rollno")}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input 
                            className="form-control" 
                            type={this.state.showpassword===true?"text":"password"}
                            id="Password"
                            placeholder="Password"
                            value={this.state.Password} onChange={this.handleChangePassword}
                            // {...register("Password")}
                        />
                    </div>
                    <input type='checkbox' id='check' style={{width:'1rem',height:'1rem'}} label='Show Password' onClick={()=>this.setState({showpassword:!this.state.showpassword})}/>
                    <label htmlFor="check" className="p-1 text-white mt-3 fw-semibold"><h5>Show Password</h5></label>

                    <div className="form-group">
                        <button style={{marginTop:'1rem'}}
                            className="btn btn-primary btn-block" type="submit">
                                <h6 className='d-inline'>Log In</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='ms-2' height="25" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                            </button>
                    </div>
                </form>
            </div>
        </div>
            }

        </div>
      );
    }
}  
export default AdminSignin