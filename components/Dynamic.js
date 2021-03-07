import dynamicStyles from "../styles/Dynamic.module.css";
export function Dynamic() {
  return (
    <div className={dynamicStyles.content_wrapper}>
      <div className={dynamicStyles.content_wrapper_Left}>
        <div className={dynamicStyles.content_wrapper_image}>
          <img src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="marketing" />
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
           <i className='fa fa-long-arrow-right'></i></button>
         </div>
      </div>
    </div>
  );
}
