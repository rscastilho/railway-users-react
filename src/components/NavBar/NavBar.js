import { useContext } from 'react';
import styles from './NavBar.module.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMysql, SiJavascript } from 'react-icons/si';
import { BiRegistered, BiKey } from 'react-icons/bi';
import { CiLogout } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
// import { Toast } from './../Toast/Toast';
import { Toast } from './../Messages/ToastFormat';

const NavBar = () => {
    const navigate = useNavigate();
    const { authenticate, setAuthenticate } = useContext(AuthContext);

    const handleLogout = () => {
        try {
            setAuthenticate(false);
            Toast.fire({
                icon: 'success',
                text: 'Logout realizado com sucesso!',
            });
            localStorage.clear();
            navigate('/');
            return;
        } catch (error) {
            return error;
        }
    };

    return (
        <nav className={`${styles.navBar}`}>
            <div className={`${styles.nome}`}>
                App.rCast <BiRegistered className={`${styles.react}`} />
            </div>
            <div>
                <Link to={'/about'} className={`${styles.link}`}>
                    <FaReact size={'3em'} color={'blue'} className={`${styles.react}`} />
                    <FaNodeJs size={'3em'} color={'green'} className={`${styles.react}`} />
                    <SiJavascript size={'3em'} color={'yellow'} className={`${styles.react}`} />
                    <SiExpress size={'3em'} color={'white'} className={`${styles.react}`} />
                    <SiMysql size={'3em'} color={'white'} className={`${styles.react}`} />
                </Link>
            </div>
            <div>
                {authenticate ? <CiLogout size={30} onClick={handleLogout} style={{ cursor: 'pointer' }} /> : <BiKey size={30} style={{ cursor: 'pointer' }} />}
            </div>
        </nav>
    );
};

export default NavBar;
