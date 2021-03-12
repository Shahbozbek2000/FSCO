import processStyles from "../../styles/Process.module.css";

const processes = [
  {
    id: 1,
    image:
      "https://www.xicom.biz/images/icons/development-process/post-project-requirements.png",
    name: "post your project requirements",
    info:
      "Our analysts will thoroughly review your project requirements and select the most experienced developers best suited for your project.",
  },
  {
    id: 2,
    image:
      "https://www.xicom.biz/images/icons/development-process/discuss-project.png",
    name: "discuss project details with our analysts",
    info:
      "Our experts will contact you within no time to discuss your project related queries and to offer the best solution for your project development.",
  },
  {
    id: 3,
    image:
      "https://www.xicom.biz/images/icons/development-process/engagement-terms.png",
    name: "choose engagement terms & timelines",
    info:
      "Based on the project consultation provided by our experts, you can choose the engagement timelines for your project execution.",
  },
  {
    id: 4,
    image:
      "https://www.xicom.biz/images/icons/development-process/secure-payment.png",
    name: "securely pay online and get started!",
    info:
      "Make payment through our 100% secure online system and our team shall immediately get started on your project within 24 hours.",
  },
];

export function Process() {
  return (
    <div className={processStyles.process_wrapper}>
      <div className="container">
        <h2>
          OUR DEVELOPMENT <span style={{ color: "#EF323A" }}>PROCESS</span>
        </h2>
        <hr/>
        <p className={processStyles.process_top_info}>
          We deliver highest level of customer service by deploying innovative
          and collaborative project management systems to build the most
          professional, robust and highly scalable web & mobile solutions with
          highest quality standards.
        </p>
        <div className="row">
          {processes.map((process, index) => (
            <div className="col-lg-3 col-sm-6 col-md-4 col-12" key={index}>
              <div className={processStyles.process_content}>
                <div className={processStyles.process_image}>
                  <img src={process.image} alt={process.name} />
                </div>
                <div className={processStyles.process_dotted}></div>
                <div className={processStyles.process_name}>
                  <h4>{process.name}</h4>
                </div>
                <div className={processStyles.process_info}>
                  <p>{process.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
