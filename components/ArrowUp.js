import React, {useState, useEffect} from 'react'
import {useWindowScroll} from 'react-use'
import arrowStyles from '../styles/Arrow.module.css'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

export  function ArrowUp() {
    const {y: pageYOffset} = useWindowScroll()
    const [visible, setVisible] = useState(false)

   useEffect(() => {
       if(pageYOffset > 400){
           setVisible(true)
       } else {
           setVisible(false)
       }
   }, [pageYOffset])

   const scrollUp = () => window.scrollTo({top:'0', behavior:'smooth'})

   if(!visible){
       return false
   }

    return (
        <div className={arrowStyles.Count_Up} onClick={scrollUp}>
          <ExpandLessIcon className={arrowStyles.arrow_top} />    
        </div>
    )
}
