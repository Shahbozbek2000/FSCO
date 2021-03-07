import visionStyles from '../styles/Ourvision.module.css'
export function OurVision() {
    return (
        <div className={visionStyles.about}>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-sm-12 col-md-6 col-xs-12 col-12'>
                   <div className={visionStyles.blog_vision}>
                       <div className={visionStyles.blog_title}>
                          <h2>Our Vision</h2>
                       </div>
                       <div className={visionStyles.blog_info}>
                          <p>Our belief in creating tangible value for our customers is what we think 
                          is different about ELEKS. Our attention to detail and quality is unmatched in the 
                          Industry. We're not just a resource provider. We value our customers success
                          as much as our own - sharing development risk, so that they can be bold on 
                          their adoption of new technologies. </p>
                       </div>
                   </div>
                </div>
                <div className='col-lg-6 col-sm-12 col-md-6 col-xs-12 col-12'>
                   <div className={visionStyles.blog_image}>
                     <img src='' />
                   </div> 
                </div>
              </div>
            </div>
        </div>
    )
}
