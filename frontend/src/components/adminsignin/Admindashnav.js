import React from 'react'
import axios from 'axios';
// import StudentNavbar from './StudentNavbar';
import AdminNavbar from './AdminNavbar';
import { Nav } from 'react-bootstrap';


class Admindashnav extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {AdminID:this.props.AdminID,Name:''};
    
        this.handleLogOut=this.handleLogOut.bind(this);
        this.getDetails=this.getDetails.bind(this);
      
      }

      handleLogOut(event) {
        localStorage.removeItem('AdminID')
        window.location.href='/admin'
      }




      componentDidMount() {
          this.getDetails();
       }
       
       getDetails = () => {

        axios.get(`http://127.0.0.1:5000/get/admins/${this.props.AdminID}/`).then(r=>this.setState({Name:r.data})).catch(err=>console.log(err))
      };
    
  
  
    render() {
      

      return (



<div className='container-fluid'>



  <AdminNavbar AdminID={this.props.AdminID}/>



</div>




      )
    }
}  
export default Admindashnav