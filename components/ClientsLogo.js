import Fade from 'react-reveal/Fade'
import cleintsLogoStyles from '../styles/ClientsLogo.module.css'


const images = [
    {id:1, image: '/images/T24.png', title:'T24'},
    {id: 2, image:'/images/TTELD.png', title: 'TTELD'},
    {id: 3, image: '/images/TTfreigt.png', title:'TTfreight'},
    {id: 4, image: '/images/ORDERTRUCK.png', title:'ORDERTRUCK'}
]

export  function ClientsLogo() {
    return (
      <Fade left cascade>
        <div className={cleintsLogoStyles.clientsLogo_wrapper}>
            <div className='container'>
              <div className='row'>  
              {
              images.map((item, index) => (
                <div className='col-lg-3 col-sm-6 col-md-4 col-12' key={index}>
                <div className={cleintsLogoStyles.card}>
                 <div className={cleintsLogoStyles.ClientsLogo_image}>
                   <img src={item.image} title={item.title}
                   className={cleintsLogoStyles.Logo_image} />
                 </div>
                 </div>
                </div>
                ))
            }
              </div>
            </div>
        </div>
        </Fade>
    )
}
