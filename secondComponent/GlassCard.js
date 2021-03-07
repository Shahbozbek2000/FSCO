import glassStyles from '../styles/glass.module.css'
import styled from 'styled-components'


export function GlassCard() {
    return (
        <div className={glassStyles.glassCard_wrapper}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy61qA2Qkyux9YO33zuYxeUuYM80pWrTdAuA&usqp=CAU'
              className={glassStyles.styledImg} />
            <h2 className={glassStyles.glassCard_title}>Bill Gates</h2>
            <h3 className={glassStyles.glassCard_info}>Microsoft Company founder</h3>
        </div>
    )
}
