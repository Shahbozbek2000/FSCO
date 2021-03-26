import uxuiHeaderStyles from '.././styles/uxuiHeader.module.css'
import Typical from 'react-typical'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'


const Image = styled(animated.div)`
  width: 100%;
  height: auto;`


export  function UxuiHeader() {
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 10, tension: 200, friction: 50}}))
    return (
        <header className={uxuiHeaderStyles.UxuiHeader_wrap}>
           <div className={uxuiHeaderStyles.UxuiHeader_content}>
             <div className={uxuiHeaderStyles.UxuiHeader_left}  
            >
               <Image
               onMouseMove={({clientX:x, clientY:y}) => (set({xys: calc(x, y)}))}
                 onMouseLeave={() => set({xys: [0, 0, 1]})}
                 style={{
                   transform: props.xys.interpolate(trans)
                 }}>
                 <img src='https://mobidev.biz/wp-content/uploads/2019/07/asp-net-web-application-development-case-study.png' 
                 alt='web page' 
                 />
               </Image>
             </div>
             <div className={uxuiHeaderStyles.UxuiHeader_right}>
              <div className={uxuiHeaderStyles.UxuiHeader_title}>
                <h1>
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={["UI/UX DESIGN SERVICES FOR SOFTWARE PRODUCT", 2000]}
               
              />
                </h1>
                <p>
                   <Typical
                   loop={Infinity}
                   wrapper="b"
                   steps={["Develop user interface to make your product stand out.", 2000]}
                 />
                 </p>
                </div>
                <div className={uxuiHeaderStyles.contactBtn}>
                 <button type='button'>Contact Us</button>
                </div>
                
             </div>
           </div>
        </header>
    )
}

