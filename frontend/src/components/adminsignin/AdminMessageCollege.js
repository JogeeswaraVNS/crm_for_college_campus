import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';

class AdminMessageCollege extends React.Component {
  

  constructor(props) {
      super(props);
      this.state = {AdminID:this.props.AdminID,Message:'',Res:'',sort:false,Data:[],Body:'',ID:'',m:this.props.m,show:false,del:false};
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeMessage=this.handleChangeMessage.bind(this);
      this.EditMessage=this.EditMessage.bind(this)
      this.PostEditedMessage=this.PostEditedMessage.bind(this)
      this.DeletePostedMessage=this.DeletePostedMessage.bind(this)
    
    }

    componentDidMount() {
      this.getDetails();
   }
   
   getDetails = () => {
    console.log(this.state.sort)
    axios.get(`http://127.0.0.1:5000/get/admin/message/clg/${this.props.AdminID}/${this.state.sort}/`)
    .then(r=>this.setState({Data:r.data}))
    // .then(r=>this.setState({Data:r.data}))
    .catch(err=>console.log(err))
   };

   EditMessage(event){
    this.setState({Body:event.target.value})
    event.preventDefault()
   }

   DeletePostedMessage(event){

    axios.delete(`http://127.0.0.1:5000/delete/admin/${this.state.AdminID}/message/clg/${this.state.ID}/`,this.state)
    .then(r=>console.log(r.data))
    .catch(err=>console.log(err))

    window.location.reload()

   }

   PostEditedMessage(event){

    axios.put('http://127.0.0.1:5000/admin/message/clg',this.state)
    .then(r=>console.log(r.data))
    .catch(err=>console.log(err))

    console.log(this.state)
   }


    handleChangeMessage(event) {
      this.setState({Message: event.target.value});
    }
  

  handleSubmit (event) {
      if (this.state.Message){
      console.log(this.state)
      axios.post('http://127.0.0.1:5000/admin/message/clg',this.state)
      .then(e=>this.setState({Res:e.status}))
      .catch(e=>this.setState({Res:e.response.status}))

      }
      else{
        alert('Message cannot be empty')
      }

      event.preventDefault();



  }
  render(){
  return (
    <div>
      {
      this.props.m===undefined?
      <div>
        

        <Modal 
            show={this.state.show}
            // onHide={()=>{this.setState({show:false})}}
            backdrop="static"
            centered
            className='modal'>
            <ModalHeader>
                <ModalTitle>Edit Your Message</ModalTitle>
            </ModalHeader>
            <ModalBody>
            <form autoComplete='off' class="p-2">
            <textarea 
                className="form-control mb-4" 
                id="complaints" cols="10" rows="5" placeholder='Write a message'
                // {...register("complaints",{required:true})}
                value={this.state.Body} onChange={this.EditMessage}
                >
            </textarea>
                <button className='btn btn-danger mb-3 me-3' type='button' onClick={()=>{
                  this.setState({show:false})
                  this.componentDidMount();
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
<h6 className='ms-2 d-inline'>Cancel</h6>
                    </button>
                <button className='btn btn-success mb-3' onClick={this.PostEditedMessage} >
                <svg xmlns="http://www.w3.org/2000/svg" className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <h6 className='ms-2 d-inline'>Save</h6>
                </button>



            </form>
            </ModalBody>
        </Modal>



        <Modal 
            show={this.state.del}
            // onHide={()=>{this.setState({show:false})}}
            backdrop="static"
            centered
            className='modal'>
            <ModalHeader>
                <ModalTitle>Do you really want to delete your Message</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <h5 className='p-2'>{this.state.Body}</h5>
              </ModalBody>
              <ModalFooter>
                <button className='btn btn-success mb-3 me-3' type='button' onClick={()=>this.setState({del:false})}>
                <svg xmlns="http://www.w3.org/2000/svg"  className='pb-1' style={{fill:'white'}} height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
<h6 className='ms-2 d-inline'>Cancel</h6>
                </button>
                <button className='btn btn-danger mb-3' onClick={this.DeletePostedMessage}>
                <svg xmlns="http://www.w3.org/2000/svg" height="25" className='pb-1' style={{fill:'white'}} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                              <h6 className='d-inline ms-2'>Delete</h6>
                </button>
                </ModalFooter>
        </Modal>



        <div className=''>

        <div style={{backgroundColor:'#82001a',marginRight:'auto'}} className='py-2 text-white my-4'>

            <div className='row'>



        <div className='col mt-2'>

<h5 className=''>You have Posted {this.state.Data.length} Message(s)
</h5>





</div>

          <div className='col mt-2'>
      <h5 className=''>College Messages
      <span><svg xmlns="http://www.w3.org/2000/svg" className='ms-2 mb-1' fill='#ffc107'  height="25" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>

        </span>
</h5>
</div>

<div className='col mt-2'>
<input className='me-1' type='checkbox' checked={this.state.sort} id='check' label='Sort By Date&Time' onClick={()=>{
  this.setState({sort:!this.state.sort},()=>{
    this.getDetails();
  });

}}/>
<label htmlFor="check" className="">
  <h5>
  Latest first
  </h5>
  </label>
</div>



</div>


</div>




      {   

this.state.Data.length===0?
<div>
  <h6>No Messages By you. Post your Messages in Post Message.</h6>
</div>:


<div>

<h5 className='mb-3'>Viewing Messages posted by you. Edit or delete your previously posted Messages here
          </h5>


<table style={{textAlign:'justify'}} className="table table-bordered border-dark table-hover table-responsive-sm mt-4">
    <thead className='table-dark'>
        <tr>
        <th><h6 className='p-3'>Admin</h6></th>
        <th><h6 className='p-3'>Message</h6></th>
            <th style={{textAlign:'center'}}><h6 className='p-3'>Date&Time</h6></th>
        </tr>
    </thead>
    <tbody>
        {
            this.state.Data.map((d)=>(
                <tr key={d.id}>
                    <td className='p-3'><h6>{d.admin}</h6></td>
                    <td style={{width:'50%'}} className='p-3'><h6>{d.message}</h6></td>
                    <td style={{textAlign:'center',width:'30%'}} className='p-3'>
                      <div className='btn btn-dark' ><h5>
              <svg xmlns="http://www.w3.org/2000/svg" height="25" style={{fill:'white'}} viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
              <span className='ms-2'>
                {d.date.split('T')[0]}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='ms-2 me-2' fill='white' height="25" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              {d.date.split('T')[1]}
              </h5></div>
              <div>
                    <Button onClick={()=>{
                      this.setState({
                        ID:d.id,
                        Body:d.message,
                        show:true
                      })
                    }} className='btn btn-primary m-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="25"  style={{fill:'white'}}  className='pb-1' viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                      <h6 className='d-inline ms-2'>Edit</h6>
                      </Button>
                    <Button onClick={()=>{
                      this.setState({
                        ID:d.id,
                        Body:d.message,
                        del:true
                      })
                    }} className='btn btn-danger m-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="25" className='pb-1' style={{fill:'white'}} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                      <h6 className='d-inline ms-2'>Delete</h6>
                      </Button>
                      </div>
                      </td>
                </tr>
            ))
        }
    </tbody>
</table>
</div>
}

      
    </div>

        


      </div>
      :
      <div>
        
        <div className=''>
            {this.state.Res===200 && <h3 className='text-success p-3'>Message Sent Successfully. You can view your Message in Your Message</h3>}
            {this.state.Res===401 && <h3 className='text-danger p-3'>Message Already Sent</h3>}
            <h4 style={{display:'block',margin:'auto',backgroundColor:'#82001a',borderRadius:''}} className='py-3 text-white my-4 mb-5'>
            Post a Message <span>
          <svg xmlns="http://www.w3.org/2000/svg" className='mb-1' fill='#ffc107'  height="30" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
</span> to all the Students in the College</h4>

          <form className='' onSubmit={this.handleSubmit}>
            <textarea 
                className="form-control w-50 mx-auto" 
                id="complaints" cols="10" rows="5" placeholder='Write a ṃessage'
                value={this.state.Message} onChange={this.handleChangeMessage}
                >
            </textarea>
            <div className="form-group">
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
}

export default AdminMessageCollege