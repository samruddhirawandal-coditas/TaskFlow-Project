import styles from './Toast.module.scss'
const Toast=({msg}: {msg:string})=>{
    return(
        <div className={styles.toastContainer}>
            <p>{msg}</p>
        </div>
    )
}

export default Toast;