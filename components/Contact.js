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
                      value={fullName}
                      onChange={this.handleChange}
                      id="standard-required"
                      label="Full name"
                      className={contactStyles.textField}
                    />
                    <TextField
                      required
                      id="standard-required"
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
             <img src='https://eleks.com/wp-content/uploads/contact-us-head-image.jpg' 
             alt='contact-img' />
             </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
