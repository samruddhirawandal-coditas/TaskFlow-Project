import type { SpanProps } from "./FormError.type";
import styles from './FormError.module.scss';
const FormError=({children, ...props}:SpanProps)=>{
    return(
        <span className={styles.ErrorMessage} {...props}>{children}</span>
    )
}
export default FormError;