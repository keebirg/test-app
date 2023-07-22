import sprite from '../imeges/sprite.svg'
import s from './Button.module.css'

type ButtonPropsType={
    style:{
        backgroundColor?: string
    },

    iconId: string,
}


export const Button=(props: ButtonPropsType)=>{
    return(
        <button className={s.btn} style={props.style}>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${sprite}#${props.iconId}`}/>
            </svg>
        </button>
    );
}