import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from './MainLayout.module.scss'

const MainLayout=()=>{
    return (
        <div className={styles.mainLayout}>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default MainLayout;