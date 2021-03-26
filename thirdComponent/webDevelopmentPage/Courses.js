import Fade from "react-reveal/Fade";
import coursesStyles from "../../styles/Courses.module.css";

const courses = [
  {
    id: 1,
    image:
      "https://www.xicom.biz/images/icons/services/web-development/web-design-development.png",
    name: "web design & development",
    info:
      " FSCO offers end-to-end website design, web application development and portal development services for your business. ",
  },
  {
    id: 2,
    image:
      "https://www.xicom.biz/images/icons/services/web-development/ecommerce-solutions.png",
    name: "ecommerce solutions",
    info:
      " FSCO build scalable and secure ebusiness and ecommerce solutions for customers across various business verticals. ",
  },
  {
    id: 3,
    image:
      "https://www.xicom.biz/images/icons/services/web-development/php-development.png",
    name: "php development",
    info:
      "FSCO offers PHP development services that enhances the business demands of our customers across all verticals. ",
  },
  {
    id: 4,
    image:
      "https://www.xicom.biz/images/icons/services/web-development/asp.net-development.png",
    name: "asp.net development",
    info:
      " FSCO provides cost effective and high performance ASP.NET development services for growing businesses and startups.",
  },
  {
    id: 5,
    image:
      "https://www.xicom.biz/images/icons/services/web-development/open-source-solutions.png",
    name: "open source solutions",
    info:
      "  We leverage time and cost saving advantages of open source technologies, frameworks and platforms to deliver scalable web applications.  ",
  },
  {
    id: 6,
    image:
      "https://www.xicom.biz/images/icons/services/web-development/website-testing.png",
    name: "website testing",
    info:
      " We have 50+ web testers to provide high performance and 100% reliable website testing services. ",
  },
];

export function Courses() {
  return (
    <section className={coursesStyles.courses_wrapper}>
      <div className="container">
        <div className={coursesStyles.courses_wrapper_content}>
          <div className={coursesStyles.courses_wrapper_left}>
            <Fade left cascade>
              <div className={coursesStyles.courses_wrapper_title}>
                <h4>
                  FSCO IS ONE OF THE TOP WEB DEVELOPMENT COMPANY WITH OVER{" "}
                  <span style={{ color: "#EF323A" }}>50,000</span> MAN YEARS OF
                  EXPERIENCE.
                </h4>
              </div>
            </Fade>
            <Fade left cascade>
              <div className={coursesStyles.courses_wrapper_info}>
                <p>
                  Fsco is a ISO 9001 certified web development company, backed
                  by a strong workforce of 300+ experts providing
                  high-performance, custom web development services of any
                  complexity with incredible competence. Fsco is a leading
                  offshore web development company that have been delivering
                  result-oriented web solutions to SME's across the globe for
                  more than 15+ years. We are committed towards adhering to
                  latest technology trends and successfully implementing
                  end-to-end web solutions that enhances the brand value of your
                  your business. The development cycle at Fsco enables us to
                  take the scalability and reliability of our web solutions to
                  next level so, you can focus on your core business processes.
                  The robust web applications developed by our web developers
                  enhances your online prominence through effective and
                  interactive customer-engagement. Hire web developers from
                  Fsco to get professionally tailored web applications and
                  solutions.
                </p>
              </div>
            </Fade>
            <Fade left cascade>
              <div className={coursesStyles.courses_btn}>
                <button type="button">
                  <img
                    src="https://www.flaticon.com/svg/vstatic/svg/390/390933.svg?token=exp=1615793342~hmac=6d44179049902ec90005583f64bd59a0"
                    alt="circle"
                  />
                  get free estimation
                </button>
              </div>
            </Fade>
          </div>
          <div className={coursesStyles.courses_wrapper_right}>
            {courses.map((course, index) => (
              <Fade right cascade  key={index}>
              <div className={coursesStyles.courses_list}>
              
                <div className={coursesStyles.courses_image}>
                  <img src={course.image} alt={course.name} />
                </div>
                <div className={coursesStyles.courses_name}>
                  <h3>{course.name}</h3>
                </div>
                <div className={coursesStyles.courses_info}>
                  <p>{course.info}</p>
                </div>
                
              </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
