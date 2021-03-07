import problemsStyles from "../styles/Problems.module.css";

const massiv = [
  {
    id: 1,
    image:
      "/images/circle.svg",
    title: "Close IT resourcing gaps",
    info:
      "Our team of more than 1600 software experts are able to tailor our core services to fit your business requirements. And of those most complex of challenges, we'll  engage experts with a grounding in physics and mathematics - to guarantee success where software expertise alone might not be enough ",
  },
  {
    id: 2,
    image:
      "/images/circle.svg",
    title: "Save business operations costs",
    info:
      "We'll help you test bold new ideas while sharing your development risk. So you can save up to 30% on development costs, get products and services to market twice as fast, improve efficiency and flex your business model to boost revenue",
  },
  {
    id: 3,
    image:
      "/images/circle.svg",
    title: "Adopt digital transformations",
    info:
      "We can help you adapt to changing demands with agile, innovative, technologies - like blockchain, Data Science and Cloud. You can leave your in-house resource in place to focus on your core business, for perfectly seamless service delivery.",
  },
];
export function Problems() {
  return (
    <div className={problemsStyles.problems_wrapper}>
      <div className="container">
        <h3 className={problemsStyles.paragraph}>
          Problems We'll Help You Solve
        </h3>
        <div className="row mt-3">
          {massiv.map((information, index) => (
            <div
              className="col-lg-4 col-sm-12 col-md-4 col-xs-12 col-12"
              key={index}
            >
              <div className={problemsStyles.content}>
                <div className={problemsStyles.content_title}>
                  <p>
                    <img
                      src={information.image}
                      style={{ width: "20px" }}
                      alt="circle"
                    />{" "}
                    <b style={{margin:'0 5px'}}>{information.title}</b>
                  </p>
                </div>
                <div className={problemsStyles.content_info}>
                  <p className={problemsStyles.info}>{information.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
