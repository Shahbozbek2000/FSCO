import counterStyles from "../styles/Counter.module.css";
import CountUp from "react-countup";
import Zoom from "react-reveal/Zoom";

export function CounterClient() {
  return (
    <div className={counterStyles.counter_wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-4 col-xs-12 col-12">
            <div className={counterStyles.completed_projects}>
              <h2>
                <CountUp start={0} end={2744} duration={10} />+
              </h2>
              <p>Completed Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-4 col-xs-12 col-12">
            <div className={counterStyles.completed_projects}>
              <h2>
                <CountUp start={0} end={39} duration={10} />
              </h2>
              <p>Available Country</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-4 col-xs-12 col-12">
            <div className={counterStyles.completed_projects}>
              <h2>
                <CountUp start={0} end={126} duration={10} />M
              </h2>
              <p>User Worldwide</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-4 col-xs-12 col-12">
            <div className={counterStyles.completed_projects}>
              <h2>
                <CountUp start={0} end={12} duration={10} />
              </h2>
              <p>Award Winner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
