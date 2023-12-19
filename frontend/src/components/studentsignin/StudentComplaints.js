import axios from 'axios';
import React from 'react'

class StudentComplaints extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Rollno:this.props.Rollno,Department:'',Body:'',Res:'',Name:''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeBody=this.handleChangeBody.bind(this);
        this.getDetails=this.getDetails.bind(this);
      
      }

      handleChangeBody(event) {
        this.setState({Body: event.target.value});
      }


      componentDidMount() {
          this.getDetails();
       }
       
       getDetails = () => {
        axios.get(`http://127.0.0.1:5000/get/${this.props.Rollno}/`).then(r=>this.setState({Department:r.data})).catch(err=>console.log(err))
        axios.get(`http://127.0.0.1:5000/get/students/${this.props.Rollno}/`).then(r=>this.setState({Name:r.data})).catch(err=>console.log(err))
       };
    
  
    handleSubmit (event) {
        // axios.post('http://127.0.0.1:5000/student/login',this.state)
        // .then(e=>this.setState({check:e.status}))
        // .catch(e=>this.setState({check:e.response.status}))
        if (this.state.Body){
        console.log(this.state)
        axios.post('http://127.0.0.1:5000/student/complaint',this.state)
        .then(e=>this.setState({Res:e.status}))
        .catch(e=>this.setState({Res:e.response.status}))
        }
        else{
          alert('Complaint cannot be empty')
        }

        event.preventDefault();



    }
  
    render() {
      return (

        <div>

          {
            this.props.Rollno===undefined?
            <div>
              <h1>Login Required</h1>
            </div>:




          <div>
            <div className='container mx-auto mt-5'>
            {this.state.Res===200 && <h3 className='text-success p-3'>Complaint Registered Successfully. You can view your complaint in My Complaints</h3>}
            {this.state.Res===401 && <h3 className='text-danger p-3'>Complaint Already Registered</h3>}
          <h2 className='p-2'>Want to improve campus experience?</h2>
          <h3 className='mb-5 p-2'>Drop your suggestions here</h3>
          <form onSubmit={this.handleSubmit}>
            <textarea 
                className="form-control w-50 mx-auto" 
                id="complaints" cols="10" rows="5" placeholder='Write a complaint'
                // {...register("complaints",{required:true})}
                value={this.state.Body} onChange={this.handleChangeBody}
                >
            </textarea>
            {/* validation error textarea*/}
            {/* {errors.complaints?.type=="required" && <p className="text-danger fw-semibold">*Complaint required to submit</p>} */}
            <div className="form-group">
                <button className="btn mt-5 btn-warning" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'black'}} height="25" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                <h5 className='d-inline p-2'>Post Complaint</h5>
                </button>
            </div>
          </form>
        </div>
          </div>
    }
</div>




      )
    }
}  
export default StudentComplaints