import titleStyles from "../styles/Title.module.css"
import Fade from 'react-reveal/Fade'

export function Title() {
  return (
    <Fade left cascade>
    <div className={titleStyles.title_wrapper}>
      <div className="container">
        <div className={titleStyles.title_info}>
          <h3>
            FSCo since 2018 providing best practices, outstanding software
            development services and delivered more than 20 software products.
          </h3>
        </div>
      </div>
    </div>
    </Fade>
  );
}
