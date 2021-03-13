import developmentStyles from "../styles/Development.module.css";
import Link from 'next/link'
import Zoom from 'react-reveal/Zoom'

const developments = [
  {
    id: 1,
    logo: "https://eleks.com/wp-content/uploads/reactoo-logo-small-white.svg",
    title: "Verifying the Concept and Building an Emotion Recognition Software",
    alt: "Developer",
    image: "https://eleks.com/wp-content/uploads/reactoo-preview.png",
  },
  {
    id: 2,
    logo: "https://eleks.com/wp-content/uploads/havas-case-logo-white.svg",
    title: "Using Data Science to augment event experiences",
    alt: "Smart Watches",
    image: "https://eleks.com/wp-content/uploads/havas-preview.png",
  },
];

export function DevelopmentSuccess() {
  return (
    <Zoom>
    <div className={developmentStyles.development_wrapper}>
      <div className="container">
      <h1 className='text-center my-5'>PoC Development Success</h1>
        <div className="row">
          {developments.map((development, index) => (
           
            <div
              className="col-lg-6 col-sm-12 col-xs-12 col-md-12 col-12" key={index}
              
            >
              <div className={developmentStyles.card}>
                <div className={developmentStyles.card_left} style={{width:'50%'}}>
                  <div className={developmentStyles.card_logo}>
                    <img src={development.logo} alt='Logo' />
                  </div>
                  <div className={developmentStyles.card_info}>
                    <h4>{development.title}</h4>
                  </div>
                  <div className={developmentStyles.learn_more}>
                    <Link href="/">
                    <button>
                      <a>Learn More</a>
                      </button> 
                    </Link>
                  </div>
                </div>
                <div className={developmentStyles.card_right} style={{width:'50%'}}>
                  <div className={developmentStyles.card_img}>
                    <img src={development.image} alt={development.title}
                    style={{width:'100%', height:'100%', objectFit:'cover'}} />
                  </div>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
    </Zoom>
  );
}
