import visualizeStyles from '../styles/Visualize.module.css'
export function Visualize() {
    return (
        <div className={visualizeStyles.visualize_wrapper}>
          <div className='container'>
             <div className={visualizeStyles.visualize_content}>
                <div className={visualizeStyles.visualize_content_left}>
                   <img src='https://mobidev.biz/wp-content/uploads/2019/07/create-wow-interface-design.png'
                   alt='audi car' />
                </div>
                <div className={visualizeStyles.visualize_content_right}>
                  <div className={visualizeStyles.visualize_content_right_title}>
                     <h3>
                     <b>visualize</b>
                     </h3>
                     <p><b>“WOW” Interface Design for User</b></p>
                  </div>
                  <div className={visualizeStyles.visualize_content_right_body}>
                    <p className={visualizeStyles.visualize_content_right_p}>
                    Engagement Inspire users through the software interface
                     design. Combine it with intuitiveness and efficiency that 
                     they will return again and again.
                    </p>
                    <p><strong>Workplace Wellbeing Platform</strong></p>
                  </div>
                  <div className={visualizeStyles.visualize_content_right_btn}>
                     <button type='button'>view</button>
                  </div>
                </div>
             </div>
          </div>  
        </div>
    )
}
