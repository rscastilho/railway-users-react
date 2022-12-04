import React from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import styles from './Login.module.css';
import { FaUserAstronaut } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleGoToHome = e => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.avatar}`} onClick={e => handleGoToHome(e)} style={{ cursor: 'pointer' }}>
                <FaUserAstronaut size={80} className={`${styles.icon}`} />
            </div>
            <FormLogin />
        </div>
    );
};

export default Login;
