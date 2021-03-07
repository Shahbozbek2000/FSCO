import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import tabStyles from '../styles/TabContent.module.css'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export function TabContent() {
  return (
    <div className={tabStyles.tabContent_wrapper}>
      <div className="container">
        <div className="row">
          <div className={tabStyles.tab_info}>
            <h1 className="text-center my-4">What We Do</h1>
            <p>
              As soon as you’ve defined your requirements, we’ll create the
              scope, timeline and budget to get started on your PoC development.
              We’ll then run through our tried and tested framework, demo your
              product and be on hand to support development.
            </p>
          </div>
        </div>
        <ScrollableTabsButtonForce />
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
          <Typography>{children}</Typography>
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
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={tabStyles.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          
    <Tab className={tabStyles.tab_text} label="Research and idea validation" icon={<img src='https://eleks.com/wp-content/uploads/research-and-idea-validation.svg' />} {...a11yProps(0)} />
    <Tab className={tabStyles.tab_text} label="Designing and developing a prototype" icon={<img src='https://eleks.com/wp-content/uploads/designing-and-developing -prototype.svg' />} {...a11yProps(1)} />
    <Tab className={tabStyles.tab_text} label="Moving to the next of your SDLC"  icon={<img src='https://eleks.com/wp-content/uploads/moving-to-the-next-phase.svg' />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
     
    </div>
  );
}