import styles from './Input.module.scss'
import type { InputProps } from './Input.type';
const Input=({label, ...props}: InputProps)=>{
    return(
        <div className={styles.formInput}>
            {
                label && <label>{label}<span className={styles.asterisk}>*</span></label>
            }
            <input {...props}/>
        </div>
    )
}
export default Input;