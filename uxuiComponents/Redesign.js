import redesignStyles from '../styles/Redesign.module.css'
export function Redesign() {
    return (
        <div className={redesignStyles.redesign_wrapper}>
          <div className='container'>
             <div className={redesignStyles.redesign_content}>
                <div className={redesignStyles.redesign_content_left}>
                   <img src='https://mobidev.biz/wp-content/uploads/2019/07/ui-ux-redesign-services.png'
                   alt='audi car' />
                </div>
                <div className={redesignStyles.redesign_content_right}>
                  <div className={redesignStyles.redesign_content_right_title}>
                     <h3>
                     <b>redesign</b>
                     </h3>
                     <p><b>Reinvent Your Current User Interface</b></p>
                  </div>
                  <div className={redesignStyles.redesign_content_right_body}>
                    <p className={redesignStyles.redesign_content_right_p}>Keep up with the latest UI/UX trends and analyze what your users want.
                     Make your software interface evolve along with your users’ habits and preferences.</p>
                    <p><strong>IoT Application for Connected Cars</strong></p>
                  </div>
                  <div className={redesignStyles.redesign_content_right_btn}>
                     <button type='button'>view</button>
                  </div>
                </div>
             </div>
          </div>  
        </div>
    )
}
