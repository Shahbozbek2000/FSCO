import React, {useState} from 'react'
import tabContentStyles from '../styles/TabContent.module.css'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'


export  function TabContent() {
    return (
        <div className={tabContentStyles.tabContent_wrapper}>
            <div className='container-fluid'>
            <Fade left cascade>
              <div className={tabContentStyles.tab_info}>
                 <h1 className='text-center'>What We Do</h1>
                 <p>
                 As soon as you’ve defined your requirements, we’ll
                  create the scope, timeline and budget to get started 
                  on your PoC development. We’ll then run through our tried
                   and tested framework, demo your product and be on hand to 
                   support development.
                 </p>
              </div>
              </Fade>
              <ScrollableTabsButtonForce/>
            </div>
        </div>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
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
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      
      width: '100%',
      
    },
  }));

  function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
      <Zoom>
        <AppBar position="static" color="default" className={tabContentStyles.appbar}>

          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Research and idea validation" icon={<img src='https://eleks.com/wp-content/uploads/research-and-idea-validation.svg'
            alt='icon' />} {...a11yProps(0)} 
            className={tabContentStyles.tab_text} />
            <Tab label="Designing and developing a prototype" icon={<img src='https://eleks.com/wp-content/uploads/designing-and-developing -prototype.svg' />} {...a11yProps(1)}
            className={tabContentStyles.tab_text} />
            <Tab label="Moving to the next phase of your SDLC" icon={<img src='https://eleks.com/wp-content/uploads/moving-to-the-next-phase.svg' />} {...a11yProps(2)}
            className={tabContentStyles.tab_text} />
            
          </Tabs>
        </AppBar>
        </Zoom>
      <Zoom>
        <TabPanel value={value} index={0} className={tabContentStyles.tab_description}>
          <p>We'll expertly research your concept, helping you scope the project 
          and identify any technological restraints and risks that could impact its
          success. Our team's expertise in emerging technologies  will allow you to find 
          unique and future-proof solutions that deliver sustainable business value.</p>
        </TabPanel>
        <TabPanel value={value} index={1} className={tabContentStyles.tab_description}>
        <p>Here's where we prove the viability of your idea. We work with your 
        fixed budget and scope to design and prototype that either proves or disproves
        how successful the concept will be in real-world terms. We can recreate your end-to-end
        process, or focus on your areas of concern - providing you with detailed results at any 
        stage.</p>
        </TabPanel>
        <TabPanel value={value} index={2} className={tabContentStyles.tab_description}>
        <p>We’ll help you test real user interaction, so you can refine your product functionality
         for the best consumer response. Once you’re assured of success, a </p>
        </TabPanel>
        </Zoom>
      </div>
    );
  }