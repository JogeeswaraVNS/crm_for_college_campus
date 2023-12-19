import React from 'react'
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import AlumniDashboardLayout from './AlumniDashboardLayout';


class Alumnidashnav extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {AlumniID:this.props.AlumniID,Name:''};
    
        this.handleLogOut=this.handleLogOut.bind(this);
        this.getDetails=this.getDetails.bind(this);
      
      }

      handleLogOut(event) {
        localStorage.removeItem('AlumniID')
        window.location.href='/alumni/login'
      }




      componentDidMount() {
          this.getDetails();
       }
       
       getDetails = () => {

        axios.get(`http://127.0.0.1:5000/get/alumni/${this.props.AlumniID}/`)
        // .then(e=>console.log(e.data))
        .then(r=>this.setState({Name:r.data}))
        .catch(err=>console.log(err))


      };
    
  
  
    render() {
      

      return (



<div className='container-fluid'>



<AlumniDashboardLayout Name={this.state.Name}/>


        
<div>
  <Outlet/>
</div>


</div>




      )
    }
}  
export default Alumnidashnav