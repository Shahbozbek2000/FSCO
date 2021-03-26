import companyInfoStyles from '../../styles/CompanyInfo.module.css'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

export  function CompanyInfo() {
    return (
        <div className={companyInfoStyles.companyInfo_wrapper}>
            <div className='container'>
             <Fade left cascade>
               <div className={companyInfoStyles.company_title}>
                  <h2 style={{display:'block'}} className={companyInfoStyles.company_h2}>OUR COMMITMENT & <span style={{color:'#EF323A'}}>GUARANTEE</span> </h2>
                  <hr/>
                  <p>FSCO delivers robust, scalable and high performance software, 
                  web and mobile app development services to help you harness the power
                   of technology, consulting and maximize your online business investment.
                  </p>
               </div>
               </Fade>
               <div className={companyInfoStyles.companyInfo_content }>
                 <Zoom>
                  <div className={companyInfoStyles.companyInfo_panel}>
                    <div className={companyInfoStyles.panel_image}>
                      <img src='https://www.xicom.biz/images/icons/guarantee/transparency.png'
                      alt='i-phone' />
                    </div>
                    <div className={companyInfoStyles.panel_name}>
                       <h5>100% transparency</h5>
                    </div>
                    <div className={companyInfoStyles.panel_info}>
                      <p> At FSCO, we believe in complete transparency with our 
                      clients and we keep them fully updated during the entire development
                       production cycle. </p>
                    </div>
                  </div>
                  </Zoom>
                  <Zoom>
                  <div className={companyInfoStyles.companyInfo_panel}>
                  <div className={companyInfoStyles.panel_image}>
                      <img src='https://www.xicom.biz/images/icons/guarantee/ontime-delivery.png'
                      alt='delivery' />
                    </div>
                    <div className={companyInfoStyles.panel_name}>
                       <h5>95% ontime delivery</h5>
                    </div>
                    <div className={companyInfoStyles.panel_info}>
                      <p> Our pursuit of agile development methodology have resulted in 
                      an enviable 95% on-time delivery track record for the past 15+ years
                       of our operations.  </p>
                    </div>
                  </div>
                  </Zoom>
                  <Zoom>
                  <div className={companyInfoStyles.companyInfo_panel}>
                  <div className={companyInfoStyles.panel_image}>
                      <img src='https://www.xicom.biz/images/icons/guarantee/free-support.png'
                      alt='support' />
                    </div>
                    <div className={companyInfoStyles.panel_name}>
                       <h5>free 30 days support</h5>
                    </div>
                    <div className={companyInfoStyles.panel_info}>
                      <p>  We take complete responsibility of our work and provide 
                      free 30 days support to all our customer 
                      even after the software / mobile app has been launched.  </p>
                    </div>
                  </div>
                  </Zoom>
                  <Zoom>
                  <div className={companyInfoStyles.companyInfo_panel}>
                  <div className={companyInfoStyles.panel_image}>
                      <img src='https://www.xicom.biz/images/icons/guarantee/flexible.png'
                      alt='i-phone' />
                    </div>
                    <div className={companyInfoStyles.panel_name}>
                       <h5>flexible engagements</h5>
                    </div>
                    <div className={companyInfoStyles.panel_info}>
                      <p>  FSCO offers tailor-made engagement models, hand crafted to meet
                       the exact requirements of clients with diverse business needs.  </p>
                    </div>
                  </div>
                  </Zoom>
                  <Zoom>
                  <div className={companyInfoStyles.companyInfo_panel} style={{borderRight:'none'}}>
                  <div className={companyInfoStyles.panel_image}>
                      <img src='https://www.xicom.biz/images/icons/guarantee/24-hours.png'
                      alt='i-phone' />
                    </div>
                    <div className={companyInfoStyles.panel_name}>
                       <h5>24X7 support</h5>
                    </div>
                    <div className={companyInfoStyles.panel_info}>
                      <p>  Our communication channels are open 24/7 that connects you with the 
                      appropriate team of experts to ensure smooth execution of your project. </p>
                    </div>
                  </div>
                  </Zoom>
               </div>
            </div>   
        </div>
    )
}
