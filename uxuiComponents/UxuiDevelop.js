import uxuiDevelopStyles from "../styles/UxuiDevelop.module.css";

export function UxuiDevelop() {
  return (
    <div className={uxuiDevelopStyles.UxuiDevelop_wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6 col-12">
            <div className={uxuiDevelopStyles.UxuiDevelop_wrapper_left}>
              <div className={uxuiDevelopStyles.UxuiDevelop_title}>
                <h3>develop</h3>
                <p>
                  <b>UI and UX for Complex Solutions</b>{" "}
                </p>
              </div>
              <div className={uxuiDevelopStyles.UxuiDevelop_info}>
                <p className={uxuiDevelopStyles.UxuiDevelop_p}>
                  Bring well-arranged user experience and industry standarts to
                  get an efficient interface and clear design.
                </p>
                <p className={uxuiDevelopStyles.UxuiDevelop_info_2}>
                  <b>ERP & POS Solution for Retail</b>{" "}
                </p>
              </div>
              <div className={uxuiDevelopStyles.UxuiDevelop_btn}>
                <button type="button">view</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 col-12">
            <video className={uxuiDevelopStyles.UxuiDevelop_video} autoPlay loop muted>
              <source src='https://mobidev.biz/wp-content/uploads/2019/07/ux-ui-development-complex-solutions-mp4.mp4' 
              type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
