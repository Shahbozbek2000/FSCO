import dynamicStyles from "../styles/Dynamic.module.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export function Dynamic() {
  return (
    <div className={dynamicStyles.content_wrapper}>
      <div className={dynamicStyles.content_wrapper_Left}>
        <div className={dynamicStyles.content_wrapper_image}>
          <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="marketing" />
        </div>
      </div>
      <div className={dynamicStyles.content_wrapper_Right}>
        <h1>We’r a dynamic team of creatives people 
        innovation & Marketing Expert.</h1>
        <h4><img src='/images/1.png' alt='FlatIcon' /> Best Digital Agency in Asia</h4>
        <p>We provide marketing services to startups and small businesses
         to looking for a partner of their digital media, design & dev, lead generation, 
         and communications requirents. We work with you, not for you. Although we have great resources.</p>
        
         <div className={dynamicStyles.content_button}>
           <button type='button' className={dynamicStyles.button}>
           <span>Learn More</span><br/>
           More about us
           <ArrowForwardIcon className={dynamicStyles.arrow_right} style={{marginLeft:'20px', fontSize:'25px'}} />
           </button>
         </div>
      </div>
    </div>
  );
}
