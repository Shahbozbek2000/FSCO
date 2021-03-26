import uxuiSectionStyles from "../styles/UxuiStyles.module.css";

export function UxuiSection() {
  return (
    <div className={uxuiSectionStyles.UxuiSection_wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6 col-12">
            <div className={uxuiSectionStyles.UxuiSection_wrapper_left}>
              <div className={uxuiSectionStyles.UxuiSection_title}>
                <h3>create</h3>
                <p>
                  <b>UI/UX Design From Scratch</b>{" "}
                </p>
              </div>
              <div className={uxuiSectionStyles.UxuiSection_info}>
                <p className={uxuiSectionStyles.UxuiSection_p}>
                Initiate your software product development with UI/UX design to get a clear road for further stages.
                 Use visualization as a part of the specification for software development.
                </p>
                <p className={uxuiSectionStyles.UxuiSection_p1}>
                  <b>Venue Management & Point of Sale Solution</b>{" "}
                </p>
              </div>
              <div className={uxuiSectionStyles.UxuiSection_btn}>
                <button type="button">view</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 col-12">
            <video className={uxuiSectionStyles.UxuiSection_video} autoPlay loop muted>
              <source src='https://mobidev.biz/wp-content/uploads/2019/07/ui-ux-design-services-from-scratch.mp4' 
              type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
