import React, {useState} from "react";
import servicesStyles from "../styles/Services.module.css";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Fade from 'react-reveal/Fade'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <h4>{children}</h4>
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}


export default function Services() {
  
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
   
      <div className={servicesStyles.Services_wrapper}>
       
        <div className="container">
        <Fade left cascade>
          <div className={servicesStyles.Services_title}>
            <h1>
            Services
            </h1>
            <p>
            
              Our software development company primarily focuses on adding extra
              value to your firm, which results in higher profitability and
              company evaluation.
            </p>
          </div>
          </Fade>
          
          <TabPanel value={value} index={0} className={servicesStyles.tab_panel}>
            <div className="row  d-sm-flex flex-sm-column-rewerse">
              <div className="col-lg-8 col-sm-12 col-md-6 col-12">
                <div className={servicesStyles.card}>
                  <div className={servicesStyles.card_header}>
                    <h2>Web development</h2>
                  </div>
                  <div className={servicesStyles.card_body}>
                    <p>
                      By using Scrum, Kanban, or Lean methodology, our offshore
                      software development company delivers functional and
                      stable applications on time, even in a constantly-changing
                      business environment. Our web apps solve a problem, are
                      easy to use, and look stunning.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 col-12">
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  className={servicesStyles.wrap_reverse}
                  indicatorColor='primary'
                  aria-label="Vertical tabs example"
                  
                >
                  <Tab label="Web Development" {...a11yProps(0)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="Mobile App Development" {...a11yProps(1)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="Dedicated development team" {...a11yProps(2)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="UX/UI design" {...a11yProps(3)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="Software testing & QA" {...a11yProps(4)}
                  className={servicesStyles.tabLabel} />
                </Tabs>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} className={servicesStyles.tab_panel}>
            <div className="row  d-sm-flex flex-sm-column-rewerse">
              <div className="col-lg-8 col-sm-12 col-md-6 col-12">
                <div className={servicesStyles.card}>
                  <div className={servicesStyles.card_header}>
                    <h2>Mobile app development</h2>
                  </div>
                  <div className={servicesStyles.card_body}>
                    <p>
                      We are a software development company that has immense
                      experience in creating feature-rich and high-performing
                      native custom applications for iOS and Android platforms.
                      We certainly keep track of the latest technical standards
                      and design recommendations by Apple and Google.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 col-12">
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  className={servicesStyles.wrap_reverse}
                  indicatorColor='primary'
                  aria-label="Vertical tabs example"
                  
                >
                  <Tab label="Web Development" {...a11yProps(0)} className={servicesStyles.tabLabel} />
                  <Tab label="Mobile App Development" {...a11yProps(1)} className={servicesStyles.tabLabel}  />
                  <Tab label="Dedicated development team" {...a11yProps(2)} className={servicesStyles.tabLabel}  />
                  <Tab label="UX/UI design" {...a11yProps(3)} className={servicesStyles.tabLabel}  />
                  <Tab label="Software testing & QA" {...a11yProps(4)} className={servicesStyles.tabLabel}  />
                </Tabs>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} className={servicesStyles.tab_panel}>
            <div className="row  d-sm-flex flex-sm-column-rewerse">
              <div className="col-lg-8 col-sm-12 col-md-6 col-12">
                <div className={servicesStyles.card}>
                  <div className={servicesStyles.card_header}>
                    <h2>Dedicated development team</h2>
                  </div>
                  <div className={servicesStyles.card_body}>
                    <p>
                      We can allocate an independent software development team
                      for your internal projects. The communication processes
                      are so well-established that you would assume that your IT
                      department is located just next door. As well, our
                      software outsourcing company can assist you in integrating
                      your IT department with dedicated remote developers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 col-12">
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  indicatorColor='primary'
                  className={servicesStyles.wrap_reverse}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  
                >
                  <Tab label="Web Development" {...a11yProps(0)} className={servicesStyles.tabLabel}  />
                  <Tab label="Mobile App Development" {...a11yProps(1)} className={servicesStyles.tabLabel} />
                  <Tab label="Dedicated development team" {...a11yProps(2)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="UX/UI design" {...a11yProps(3)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="Software testing & QA" {...a11yProps(4)} 
                  className={servicesStyles.tabLabel}/>
                </Tabs>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} className={servicesStyles.tab_panel}>
            <div className="row  d-sm-flex flex-sm-column-rewerse">
              <div className="col-lg-8 col-sm-12 col-md-6 col-12">
                <div className={servicesStyles.card}>
                  <div className={servicesStyles.card_header}>
                    <h2>UX/UI Design</h2>
                  </div>
                  <div className={servicesStyles.card_body}>
                    <p>
                      Our web and mobile app development company also provides
                      UX & UI design service as part of the custom application
                      development process. Key criteria of our successful
                      designs are: ease of use, conversion rate improvement, and
                      willingness to use your application over competitors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 col-12">
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  indicatorColor='primary'
                  className={servicesStyles.wrap_reverse}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  
                >
                  <Tab label="Web Development" {...a11yProps(0)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="Mobile App Development" {...a11yProps(1)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="Dedicated development team" {...a11yProps(2)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="UX/UI design" {...a11yProps(3)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="Software testing & QA" {...a11yProps(4)}
                  className={servicesStyles.tabLabel} />
                </Tabs>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4} className={servicesStyles.tab_panel}>
            <div className="row d-sm-flex flex-sm-column-rewerse">
           
              <div className="col-lg-8 col-sm-12 col-md-6 col-12">
                <div className={servicesStyles.card}>
                  <div className={servicesStyles.card_header}>
                    <h2>Software testing & QA </h2>
                  </div>
                  <div className={servicesStyles.card_body}>
                    <p>
                      Our web and mobile app development company also provides
                      UX & UI design service as part of the custom application
                      development process. Key criteria of our successful desi
                      gns are: ease of use, conversion rate improvement, and
                      willingness to use your application over competitors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 col-12">
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  indicatorColor='primary'
                  className={servicesStyles.wrap_reverse}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  
                >
                  <Tab label="Web Development" {...a11yProps(0)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="Mobile App Development" {...a11yProps(1)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="Dedicated development team" {...a11yProps(2)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="UX/UI design" {...a11yProps(3)}
                  className={servicesStyles.tabLabel} />
                  <Tab label="Software testing & QA" {...a11yProps(4)}
                  className={servicesStyles.tabLabel} />
                </Tabs>
              </div>
              </div>
         
          </TabPanel>
       
        </div>
      
      </div>
     
    </div>
  );
}
