import React from 'react'
import axios from 'axios';
import StudentNavbar from './StudentNavbar';
import { Nav } from 'react-bootstrap';


class Studentdashnav extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {Rollno:this.props.Rollno};

      }


    
  
  
    render() {
      


      return (



<div className='container-fluid'>





  <StudentNavbar Rollno={this.state.Rollno}/>


</div>




      )
    }
}  
export default Studentdashnav