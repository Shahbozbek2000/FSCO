import React from "react";
import ourServiceStyles from "../styles/OurService.module.css";
import Zoom from 'react-reveal/Zoom'

const ourService = [
  {
    id: 1,
    name: "Custom Healthcare Software Solutions",
    info:
      "Our team provides custom healthcare software development services for the healthcare industry. We create sophisticated software solutions to help medical organizations  improve their productivity, patient care, and cost-effectiveness.",
    image:'/images/custom.png',
    button:'Learn More'
  },
  {
      id: 2,
      name:'Real Estate',
      info:'Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general.',
      image:'/images/real_estate.png',
      button:'Learn more'
  },
  {
    id: 3,
    name:'Logistic Software Development',
    info:'Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general.',
    image:'/images/logistic.png',
    button:'Learn More'
},
{
    id: 4,
    name:'On demand Projects',
    info:'Our unique formula of combining fast-response helpdesk support plus proactive IT management plus strategic IT guidance has proven to be the only formula for Bay Area`s small to medium businesses to enhance profits, increase staff efficiency and savings, and grow a competitive advantage.',
    image:'/images/logistic.png',
    button:'Learn More'
},
 
];

export function OurServices() {
  return (
    <section className={ourServiceStyles.ourService_wrapper}>
      <div className="container">
        <div className="row">
          {
              ourService.map((xizmatlar, index) => (
                <Zoom key={index}>
                <div className="col-lg-6 col-sm-12 col-md-6 col-12">
                   <div className={ourServiceStyles.ourService_content}>
                      <div className={ourServiceStyles.ourService_top}>
                         <h4 className={ourServiceStyles.ourService_name}>{xizmatlar.name}</h4>
                         <img src={xizmatlar.image} alt={xizmatlar.name} />
                      </div>
                      <div className={ourServiceStyles.ourService_bottom}>
                        <p>{xizmatlar.info}</p>
                        <button type='button' className={ourServiceStyles.button}>
                        {xizmatlar.button}
                        </button>
                      </div>
                   </div>
                </div>
                </Zoom>
              ))
          }
        </div>
      </div>
    </section>
  );
}
