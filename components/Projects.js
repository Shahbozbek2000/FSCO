import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import projectStyles from "../styles/Project.module.css";
import { Button } from "@material-ui/core"
import Fade from 'react-reveal/Fade'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <h3>{children}</h3>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily:'Poppins',
    width:'100%',
    
   
  },
}));

export default function Projects() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Fade left cascade>
    <h1 style={{paddingLeft:'100px', paddingTop:'60px',  fontFamily:'Poppins', 
    margin:'0 !important',paddingBottom:'30px', fontSize:'50px'}}
    className={projectStyles.h1}>Our latest projects</h1>
    </Fade>
    <div className="container">
    <Fade left cascade>
      <AppBar
        position="static"
        className={projectStyles.MuiTabs_flexContainer}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
        
          <Tab label="T24.uz" {...a11yProps(0)} className={projectStyles.appLabel} />
          <Tab label="tt eld" {...a11yProps(1)} className={projectStyles.appLabel} />
          <Tab label="tt freight" {...a11yProps(2)} className={projectStyles.appLabel} />
         
        </Tabs>
      </AppBar>
     </Fade>
      
        <TabPanel value={value} index={0} className={projectStyles.tab_panel}>
          <div className="row">
          <Fade left cascade>
           <div className='col-lg-6 col-sm-12 col-md-6 col-xs-12 col-12'>
             <div className={projectStyles.Left_image}>
              <img src='/images/smartmockup.png' alt='left image' />
             </div>
           </div>
           </Fade>
           <Fade right cascade>
           <div className='col-lg-6 col-sm-12 col-md-6  col-12'>
             <div className={projectStyles.Right_Content}>
               <div className={projectStyles.T24_Logo}>
                  <img src='/images/T-24.png' alt='logo' />
               </div>
               <div className={projectStyles.Right_title}>
                 <span>Uzbekistan</span>
                 <span style={{marginLeft:'100px'}}>Medium Business</span>
               </div>
              <div className={projectStyles.Right_description}>
                <p>With FSCo we reached trust of our
                 customers<br/> and Parters with our outstanding 
                 performance</p>
              </div>
              <div className={projectStyles.Right_content_price}>
                <p>Total User  500,000</p>
              </div>
              <div className={projectStyles.Right_courses_name}>
                <p style={{paddingTop:'20px'}}> - Platform Architecture     - Web site     - Android<br/>
                - IOS     - Full software solutions     - Automtisation  </p>
              </div>
             </div>
           </div>
           </Fade>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} className={projectStyles.tab_panel}>
          <div className="row">
          <Fade left cascade>
          <div className='col-lg-6 col-sm-12 col-md-6 col-xs-12 col-12'>
          <div className={projectStyles.Left_image}>
           <img src='/images/tteld_2.png' alt='left image' />
          </div>
        </div>
        </Fade>
        <Fade right cascade>
        <div className='col-lg-6 col-sm-12 col-md-6  col-12'>
          <div className={projectStyles.Right_Content}>
            <div className={projectStyles.T24_Logo}>
               <img src='/images/TT_ELD.png' alt='logo' />
            </div>
            <div className={projectStyles.Right_title}>
              <span>USA</span>
              <span style={{marginLeft:'100px'}}>Medium Business</span>
            </div>
           <div className={projectStyles.Right_description}>
             <p>FSCo helped us to build user firendly and high <br/> performance
             platfor for our dispatchers and drivers</p>
           </div>
           <div className={projectStyles.Right_content_price}>
             <p>Total User  1,000</p>
             <p style={{marginTop:'-20px'}}>Total Business User  17</p>
           </div>
           <div className={projectStyles.Right_courses_name}>
             <p style={{paddingTop:'20px'}}> - Platform Architecture     - Web site     - Android<br/>
             - IOS     - Full software solutions     - Automtisation  </p>
           </div>
          </div>
        </div>
           </Fade> 
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} className={projectStyles.tab_panel}>
          <div className="row">
          <Fade left cascade>
          <div className='col-lg-6 col-sm-12 col-md-6 col-xs-12 col-12'>
          <div className={projectStyles.Left_image}>
           <img src='/images/ttfreight_3.png' alt='left image' />
          </div>
        </div>
        </Fade>
        <Fade right cascade>
        <div className='col-lg-6 col-sm-12 col-md-6  col-12'>
          <div className={projectStyles.Right_Content}>
            <div className={projectStyles.T24_Logo}>
               <img src='/images/Freight.png' alt='logo' />
            </div>
            <div className={projectStyles.Right_title}>
              <span>USA</span>
              <span style={{marginLeft:'100px'}}>Medium Business</span>
            </div>
           <div className={projectStyles.Right_description}>
             <p>With FSCo we reached trust of our
              customers<br/> and Parters with our outstanding 
              performa  nce</p>
           </div>
           <div className={projectStyles.Right_content_price}>
             <p>Total User  500,000</p>
           </div>
           <div className={projectStyles.Right_courses_name}>
             <p style={{paddingTop:'20px'}}> - Platform Architecture     - Web site     - Android<br/>
             - IOS     - Full software solutions     - Automtisation  </p>
           </div>
          </div>
        </div>
        </Fade>
      </div>
        </TabPanel>
        
       </div>
    </div>
  );
}
