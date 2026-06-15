import styles from './Home.module.scss'
import background from '../../assets/images/background.jpg'
import { Outlet } from 'react-router-dom'

const Home=()=>{
    return(
        <div className={styles.home}>
            <img src={background} alt="background image" className={styles.background}/>
            <Outlet/>
        </div>
    )
}
export default Home;