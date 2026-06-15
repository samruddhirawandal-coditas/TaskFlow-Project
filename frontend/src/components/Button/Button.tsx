import type { ButtonProps } from "./Button.type"
import styles from './Button.module.scss'
const Button=({children, ...props}: ButtonProps)=>{
    return(
        <button {...props}>{children}</button>
    )
}

export const PrimaryBtn=({...props}: ButtonProps)=><Button {...props} className={styles.PrimaryBtn}/>
export const SecondaryBtn=({...props}: ButtonProps)=><Button {...props} className={styles.SecondaryBtn}/>

