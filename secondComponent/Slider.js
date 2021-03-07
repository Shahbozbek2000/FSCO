import sliderStyles from "../styles/Slider.module.css";
import Typical from "react-typical";

export function AboutUs() {
  return (
    <div>
      <div>
        <div className={sliderStyles.wrap}></div>
        <div className={sliderStyles.slider_wrapper}>
          <div className={sliderStyles.slider_wrapper_Image}>
            <div className={sliderStyles.slider_wrapper_title}>
              <h1>
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={["Customers glory is our glory", 4000]}
                />
              </h1>
            </div>
            <div className={sliderStyles.slider_wrapper_button}>
              <button>Explore now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
