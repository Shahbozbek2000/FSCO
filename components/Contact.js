import contactStyles from "../styles/Contact.module.css";
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField"
import styled from 'styled-components'
import { makeStyles } from "@material-ui/core/styles"
import Fade from "react-reveal/Fade"
import { useSpring, animated } from 'react-spring'

const Container = styled(animated.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 95%;
margin-left: 30px;
padding: 20px;
box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.4);
border-radius: 20px;

@media only screen and (max-width: 676px) {
  margin-left: 0;
  display: none;
}
`


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      country: "",
      company: "",
      message: "",
      
      formErrors: {
        fullName: null,
        email: null,
        phoneNumber: null,
        country: null,
        company: null,
        message: null,
      },
    };
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
      textAlign: "center",
      fontFamily: "Poppins",
      background: "#F7F7F7",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      fontSize: "12px",
      fontWeight: "bold",
      borderRadius: "4px",
      paddingTop: "20px",
      cursor: "pointer",
      boxSizing: "border-box",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }



  render() {
    const {
      fullName,
      email,
      phoneNumber,
      country,
      company,
      message,
    } = this.state
  
    return (
      <div className={contactStyles.contact_wrapper}>
        <div className="container">
          <div className="row">
            <Fade left cascade>
              <div className="col-lg-7 col-md-6 col-sm-12  col-12">
                <div className={contactStyles.form_wrapper}>
                  <form onSubmit={this.handleSubmit}>
                    <h2>Contact Us</h2>
                    <div className={contactStyles.input_wrapper}>
                      <TextField
                        required
                        noValidate
                        name="fullName"
                        maxLength='20'
                        value={fullName}
                        onChange={this.handleChange}
                        id="standard-required"
                        label="Full name"
                        className={contactStyles.textField}
                      />
                      <TextField
                        required
                        id="standard-required"
                        name="email"
                        label="Email"
                        required
                        type='email'
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
                        name="phoneNumber"
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
                        name="country"
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
                        name="company"
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
                        name="message"
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
                      <button type="submit" className="my-4">
                        Send us message and get your free consultation
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Fade>
            <Fade right cascade>
              <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 col-12">
                <Card  />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

function Card(){
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 10, tension: 200, friction: 50}}))
  return (
    <Container
    onMouseMove={({clientX:x, clientY:y}) => (set({xys: calc(x, y)}))}
    onMouseLeave={() => set({xys: [0, 0, 1]})}
    style={{
      transform: props.xys.interpolate(trans) 
    }}>
    <div className={contactStyles.card_info}>
      <p>The breadth of knowledge and understanding that FSCO has within 
      its walls allows us to leverage that expertise to make superior deliverables
     for our customers. When you work with FSCO, you are working with the top 1% of 
     the aptitude and engineering excellence of the whole country.</p>
    </div>
    <div className={contactStyles.card_image}>
      <img src='https://eleks.com/wp-content/uploads/caroline-aumeran-1.jpg'
      alt='Mentor' />
    </div>
    <div className={contactStyles.card_name}>
       <h5>Sam Fleming</h5>
    </div>
    <div className={contactStyles.card_job}>
      <p>Front-End Developer</p>
    </div>
 </Container>
  )
}