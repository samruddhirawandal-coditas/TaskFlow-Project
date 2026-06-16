import { useEffect } from 'react';
import styles from './Toast.module.scss'
import type { ToastProps } from './Toast.type';
const Toast=({msg, duration=3000, onClose}: ToastProps)=>{
    useEffect(()=>{
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => {
            clearTimeout(timer);
        };
    }, [duration])
    return(
        <div className={styles.toastContainer}>
            <p>{msg}</p>
        </div>
    )
}

export default Toast;