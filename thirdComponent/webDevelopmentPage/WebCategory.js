import webCategoryStyles from "../../styles/WebCategory.module.css";
import Zoom from 'react-reveal/Zoom'
export function WebCategory() {
  return (
    
    <div className={webCategoryStyles.webCategory_wrapper}>
      <div className="container">
        <div className={webCategoryStyles.webCategory_content}>
          <div className={webCategoryStyles.webCategory_top}>
          <Zoom>
            <div
              className={webCategoryStyles.webCategory_panel}
              style={{ background: "#002958" }}
            >
              <div className={webCategoryStyles.webCategory_image}>
                <img
                  src="https://www.xicom.biz/images/icons/industries/media.png"
                  alt="panel"
                />
              </div>
              <div className={webCategoryStyles.webCategory_info}>
                <h3>custom web</h3>
                <p>development</p>
              </div>
            </div>
            </Zoom>
            <Zoom>
            <div
              className={webCategoryStyles.webCategory_panel}
              style={{ background: "#e9edf3" }}
            >
              <div className={webCategoryStyles.webCategory_image}>
                <img
                  src="https://www.xicom.biz/images/icons/industries/transportation.png"
                  style={{filter:'none'}}
                  alt="e-commerse"
                />
              </div>

              <div className={webCategoryStyles.webCategory_info} style={{color:'#023575'}}>
                <h3>ecommerce</h3>
                <p>development</p>
              </div>
            </div>
            </Zoom>
            <Zoom>
            <div
              className={webCategoryStyles.webCategory_panel}
              style={{ background: "#002958" }}
            >
              <div className={webCategoryStyles.webCategory_image}>
                <img
                  src="https://www.xicom.biz/images/icons/industries/banking.png"
                  alt="enterprice"
                />
              </div>
              <div className={webCategoryStyles.webCategory_info}>
                <h3>enterprise</h3>
                <p>web applications</p>
              </div>
            </div>
            </Zoom>
          </div>


          <div className={webCategoryStyles.webCategory_bottom}>
          <Zoom>
            <div className={webCategoryStyles.webCategory_box} style={{background:'#0099DA'}}>
              <div className={webCategoryStyles.webCategory_image}>
                <img
                  src="https://www.xicom.biz/images/icons/industries/services.png"
                  alt="integration"
                />
              </div>
              <div className={webCategoryStyles.box_info}>
                <h3>THIRD PARTY</h3>
                <p>INTEGRATION</p>
              </div>
            </div>
            </Zoom>
            <Zoom>
            <div className={webCategoryStyles.webCategory_box}  style={{background:'#0D4388'}}>
              <div className={webCategoryStyles.webCategory_image}>
                <img
                  src="https://www.xicom.biz/images/icons/industries/vendor.png"
                  alt="applications"
                />
              </div>
              <div className={webCategoryStyles.box_info}>
                <h3>INTRANET</h3>
                <p>APPLICATIONS</p>
              </div>
            </div>
            </Zoom>
            <Zoom>
            <div className={webCategoryStyles.webCategory_box} style={{background:'#0099DA'}}>
              <div className={webCategoryStyles.webCategory_image}>
                <img
                  src="https://www.xicom.biz/images/icons/industries/ecommerce.png"
                  alt="content"
                />
              </div>
              <div className={webCategoryStyles.box_info}>
                <h3>CONTENT</h3>
                <p>MANAGEMENT SYSTEM</p>
              </div>
            </div>
            </Zoom>
            <Zoom>
            <div className={webCategoryStyles.webCategory_box} style={{background:'#0D4388'}}>
              <div className={webCategoryStyles.webCategory_image}>
                <img
                  src="https://www.xicom.biz/images/icons/development-process/post-project-requirements.png"
                  alt="solutions"
                />
              </div>
              <div className={webCategoryStyles.box_info}>
                <h3>SMART ITES</h3>
                <p>SOLUTIONS</p>
              </div>
            </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  
  );
}
