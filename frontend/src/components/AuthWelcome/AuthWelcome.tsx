import styles from './AuthWelcome.module.scss'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import { ROUTES } from '../../constants/constants'
const AuthWelcome=()=>{
    return (
        <div className={styles.welcome}>
            <h1>Welcome to TaskFlow</h1>
            <p>
                Plan Smarter, work together, and achieve more with TaskFlow's intuitive project management experience.
            </p>
            <div className={styles.login}>
                <Link to={ROUTES.LOGIN} className={styles.link}>Get started</Link>
                <MoveRight className={styles.moveRight}/>
            </div>
        </div>
    )
}
export default AuthWelcome;