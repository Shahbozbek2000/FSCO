import mobileListStyles from '../styles/MobileList.module.css'

export function MobileList(){
    return (
      <div className={mobileListStyles.mobileList_wrap}>
         <div className='container'>
            <div className='row'>
               <div className='col-lg-6 col-sm-12 col-md-6'>
                  <div className={mobileListStyles.mobileImage}>
                     <img src='https://mobidev.biz/wp-content/uploads/2019/07/custom-mobile-app-development-services.png'
                     alt='mobile-image' style={{width:'100%'}} />
                  </div>
               </div>
               <div className='col-lg-6 col-sm-12 col-md-6'>
                 <ul className={mobileListStyles.ListItem}>
                  <h3 className={mobileListStyles.ListTop}>Mobile App development services</h3>
                  <li>Mobile development services for integrated software systems</li>
                  <li>Augmented reality for business-driven mobile development</li>
                  <li>Integration with existing software and hardware</li>
                  <li>Creation of complex solutions from scratch</li>
                  <li>Architectural solutions for mobile applications</li>
                  <li>APIs and 3rd-party integrations</li>
                 </ul>
               </div>
            </div>
         </div>
      </div>
    )
}