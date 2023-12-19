import axios from 'axios';
import React, { useState } from 'react'

class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Rollno: '',Password:'',check:''};
  
      this.handleChangeRollno = this.handleChangeRollno.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.checkLogin=this.checkLogin.bind(this)
    }
    componentDidMount() {
        this.checkLogin();
     }
     checkLogin = () => {
        axios.put("http://127.0.0.1:5000/get/student/check",this.state)
            .then(e => console.log(e.data))
            .catch(err => {
                console.log(err);
                return null;
            });
     };
    handleChangeRollno(event) {
      this.setState({Rollno: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({Password: event.target.value});
      }
  
    handleSubmit (event) {
        alert('A name was submitted: ' + this.state.Rollno + this.state.Password);
        axios.post('http://127.0.0.1:5000/student/login',this.state)
        .then(e=>this.setState({check:e.status}))
        .catch(e=>this.setState({check:e.response.status}))
        event.preventDefault();
    }
  
    render() {
      return (
        <div>
            {this.state.check===200?
            <div>
                Logged IN
            </div>
            :            
            // <div>
            // <form onSubmit={this.handleSubmit}>
            //   <label>
            //     Name:
            //     <input type="text" value={this.state.Rollno} onChange={this.handleChangeRollno} />
            //   </label>
            //   <label>
            //     Password:
            //     <input type="password" value={this.state.value} onChange={this.handleChangePassword} />
            //   </label>
            //   <input type="submit" value="Submit" />
            // </form>
            // </div>
            <div className="register-photo">
            <div className="form-container">
                <div className="image-holder"></div>
                {/* <form onSubmit={SubmitForm}> */}
                <form onSubmit={this.handleSubmit}> 
                    <h2 className="text-center"><strong>Student </strong>account</h2>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            id="Rollno"
                            placeholder="Rollno"
                            value={this.state.Rollno} onChange={this.handleChangeRollno}
                            // {...register("Rollno")}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="password"
                            id="Password"
                            placeholder="Password"
                            value={this.state.value} onChange={this.handleChangePassword}
                            // {...register("Password")}
                        />
                    </div>
                    <div className="form-group">
                        <button 
                            className="btn btn-primary btn-block" type="submit">Sign In</button>
                    </div>
                    <a href="#" className="forgot">Forgot Pasword ? Recover Here</a>
                </form>
            </div>
        </div>
            }

        </div>
      );
    }
}  
export default Demo