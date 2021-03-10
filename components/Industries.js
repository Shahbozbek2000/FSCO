import Link from "next/link";
import industriesStyles from "../styles/Industries.module.css";
import Fade from 'react-reveal/Fade'

const services = [
  {
    id: 1,
    image: "/images/profile.svg",
    alt: "service",
    title: "Business Consulting",
    info: "Lorem ipsum dolor sit amet, percipitur sadipscing.",
  },
  {
    id: 2,
    image: "/images/layers.svg",
    alt: "service",
    title: "Interface Design",
    info: "Lorem ipsum dolor sit amet, percipitur sadipscing.",
  },
  {
    id: 3,
    image: "/images/graph-bar.svg",
    alt: "service",
    title: "SEO & SMM services",
    info: "Lorem ipsum dolor sit amet, percipitur sadipscing.",
  },
  {
    id: 4,
    image: "/images/smartphone.svg",
    alt: "service",
    title: "Apps Development",
    info: "Lorem ipsum dolor sit amet, percipitur sadipscing.",
  },
];

export function Industries() {
  return (
    <div className={industriesStyles.Industries_wrapper}>
    <Fade left cascade>
      <div className={industriesStyles.Industries_Left}>
        <img
          src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="service-left"
        />
      </div>
      </Fade>
      <Fade right cascade>
      <div className={industriesStyles.Industries_Right}>
        <div className={industriesStyles.Industries_title}>
          <h6>OUR SERVICES</h6>
        </div>
        <div className={industriesStyles.Industries_info}>
          <h2>We provide wide range of web & business services.</h2>
        </div>
        <div className={industriesStyles.Industries_Right_Description}>
          <p>We’ve strong work history with different business services</p>
        </div>
        <div className="container">
          <div className="row">
            {services.map((xizmatlar, index) => (
              <div className="col-lg-6 col-sm-12 col-xs-12 col-12" key={index}>
                <div className={industriesStyles.service_icons}>
                  <div className={industriesStyles.service_icon}>
                    <img src={xizmatlar.image} alt={xizmatlar.alt} />
                  </div>
                  <div className={industriesStyles.service_panel}>
                     <Link href='/'>
                      <a>{xizmatlar.title}</a>
                     </Link>
                     <p>{xizmatlar.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      </Fade>
    </div>
  );
}
