import headerStyles from '../../styles/Header.module.css'
import Typical from 'react-typical'

export  function Header() {
    return (
        <header className={headerStyles.web_development_wrap}>
           <div className={headerStyles.web_development_content}>
             <div className={headerStyles.web_development_left}>
               <div className={headerStyles.web_development_image}>
                 <img src='https://www.xicom.biz/images/services/web-development.png' alt='web page' />
               </div>
             </div>
             <div className={headerStyles.web_development_right}>
              <div className={headerStyles.web_development_title}>
                <h1>
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={["WEBSITE DEVELOPMENT", 3000]}
               
              />
                </h1>
                <p>
                   <Typical
                   loop={Infinity}
                   wrapper="b"
                   steps={["Xicom offers robust and scalable web application development services across various platforms and industry verticals. We provide complete end-to-end website development services for mission-critical web applications demanding superior performance", 3000]}
                 />
                 </p>
                </div>
             </div>
           </div>
        </header>
    )
}

