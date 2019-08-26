import React, { Component } from 'react';
import axios from 'axios';

const API_PATH = '/api/index.php';

class Contact extends Component {

constructor(props) {
  super(props);
  this.state = {
    fname: '',
    lname: '',
    email: '',
    message: '',
    'mailSent': false,
    error:null
  }
}

handleFormSubmit(e) {
  e.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    withCredentials:false,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
};

  render() {

    if(this.props.data){
      var message = this.props.data.contactmessage;
    }


    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="twelve columns">

          <form action="#">
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." 
            value={this.state.fname}
            onChange={e => this.setState({fname:e.target.value})}
             />
            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."
            value={this.state.lname}
            onChange={e => this.setState({lname: e.target.value })} />


            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value })} />


            <label>Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."
            onChange= {e => this.setState({message: e.target.value })}
            value={this.state.message}
            ></textarea>
            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
            <div>
              {this.state.mailSent &&
                 <div>Thank you for contacting us.</div>
                    }
              </div>
            </form>
           
               
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   
				   </div>

      
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
