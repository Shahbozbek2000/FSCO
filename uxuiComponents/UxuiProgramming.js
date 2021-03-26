import programmingStyles from "../styles/Programming.module.css";
import Typical from "react-typical";

export function Programming() {
  return (
    <div className={programmingStyles.programming_wrapper}>
      <div className={programmingStyles.programming_lists}>
        <div className={programmingStyles.programming_info}>
          <h2>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "MOBILE DEVELOPMENT FOR ENTERPRISES AND EMERGING COMPANIES",
                5000,
              ]}
            />
          </h2>
        </div>
        
      </div>
    </div>
  );
}
