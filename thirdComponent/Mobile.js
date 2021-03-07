import mobileStyles from "../styles/Mobile.module.css";
import Typical from "react-typical";

export function Mobile() {
  return (
    <div>
      <div className={mobileStyles.wrap}></div>
      <div className={mobileStyles.mobidev_wrapper}>
        <div className={mobileStyles.mobidev_info}>
          <div className={mobileStyles.mobidev_text}>
            <h1>
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={["Mobile application development", 3500]}
              />
            </h1>
            <p>
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={["Unlock mobility for your business growth.", 3500]}
              />
            </p>
            <div className={mobileStyles.mobidev_contact}>
              <button type="button" className={mobileStyles.contactUs}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
