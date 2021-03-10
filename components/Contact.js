import contactStyles from "../styles/Contact.module.css";
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import TextTruncate from "react-text-truncate";
import { makeStyles } from "@material-ui/core/styles";
import ReactCardCarousel from "react-card-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export class Contact extends Component {
constructor(props){
  super(props)
    this.state = {
     fullName:'',
     email:'',
     phoneNumber:'',
     country:'',
     company:'',
     message:'',
     formErrors: {
       fullName:null,
       email: null,
       phoneNumber: null,
       country: null,
       company: null,
       message: null
     }
    
  }
}

  static get CONTAINER_STYLE() {
   
    return {
      position: "relative",
      height: "60vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    };
  }

  static get CARD_STYLE() {
    return {
      height: "300px",
      width: "250px",
      textAlign:'center',
      fontFamily: "Poppins",
      background: "#F7F7F7",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      fontSize: "12px",
      fontWeight: "bold",
      borderRadius: "4px",
      paddingTop:'20px',
      cursor:'pointer',
      boxSizing: "border-box",
    };
  }

 handleSubmit = (e) => {
   e.preventDefault()
 }
 handleChange = (e) => {
   this.setState({[e.target.name]: e.target.value})
 }

  render() {
    const {fullName, email, phoneNumber, country, 
      company, message} = this.state
    return (
      <div className={contactStyles.contact_wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12  col-12">
              <div className={contactStyles.form_wrapper}>
                <form onSubmit={this.handleSubmit}>
                  <h2>Contact Us</h2>
                  <div className={contactStyles.input_wrapper}>
                    <TextField
                      required
                      noValidate
                      name='fullName'
                      value={fullName}
                      onChange={this.handleChange}
                      id="standard-required"
                      label="Full name"
                      className={contactStyles.textField}
                    />
                    <TextField
                      required
                      id="standard-required"
                      name='email'
                      label="Email"
                      required
                      value={email}
                      noValidate
                      onChange={this.handleChange}
                      className={contactStyles.textField}
                      style={{ marginLeft: "25px" }}
                    />
                    <TextField
                      required
                      id="standard-required"
                      label="Phone number"
                      required
                      name='phoneNumber'
                      value={phoneNumber}
                      noValidate
                      onChange={this.handleChange}
                      className={contactStyles.textField}
                      style={{ marginTop: "30px" }}
                    />
                    <TextField
                      required
                      id="standard-required"
                      label="Country"
                      required
                      name='country'
                      value={country}
                      noValidate
                      onChange={this.handleChange}
                      className={contactStyles.textField}
                      style={{ marginLeft: "25px", marginTop: "30px" }}
                    />
                    <TextField
                      required
                      id="standard-required"
                      label="Company"
                      required
                      noValidate
                      name='company'
                      value={company}
                      onChange={this.handleChange}
                      className={contactStyles.textField_1}
                      style={{ marginTop: "30px" }}
                    />
                    <TextField
                      required
                      id="standard-required"
                      label="Message"
                      required
                      noValidate
                      name='message'
                      value={message}
                      onChange={this.handleChange}
                      className={contactStyles.textField_1}
                      style={{ marginTop: "30px" }}
                    />
                  
                  </div>
                  <div className={contactStyles.checkBox}>
                    <input type="checkbox" style={{ marginTop: "30px" }} />
                    <label style={{ margin: "0 5px", fontSize: "14px" }}>
                      I want to receive news and updates once in a while
                    </label>
                    <p style={{ fontSize: "12px", lineHeight: "30px" }}>
                      We will add your into to our CRM for contacting you
                      regarding your request. For more info please consult our
                      privacy policy
                    </p>
                  </div>

                  <div className={contactStyles.btn_group}>
                  <button type='submit' className='my-4'>Send us message and get your free
                  consultation</button>
                </div>
                </form>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
            <div className={contactStyles.right_image}>
             <img src='https://images.unsplash.com/photo-1577760258779-e787a1733016?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
             alt='contact-img' className='img-fluid' />
             </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
