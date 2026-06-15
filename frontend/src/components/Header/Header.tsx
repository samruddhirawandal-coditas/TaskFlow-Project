import { PrimaryBtn } from "../Button/Button";
import styles from './Header.module.scss'
import logoname from '../../assets/images/TaskFlow.png'
import logo from '../../assets/images/TaskFlow icon.png'
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

const Header=()=>{
    const location= useLocation();
    const navigate= useNavigate();
    const isLoginPage= location.pathname===ROUTES.LOGIN;

    const handleGetStarted=()=>{
        navigate(ROUTES.LOGIN);
    }
    return(
        <header className={styles.header}>
            <div>
                <img src={logo} alt="Website Logo" className={styles.logo}/>
                <img src={logoname} alt="Website Title" className={styles.logoname} />
            </div>
            {
                !isLoginPage ?
                <PrimaryBtn onClick={()=>handleGetStarted()}>Login</PrimaryBtn> :
                null
            }
        </header>
    )
}

export default Header;