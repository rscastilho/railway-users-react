import React from 'react'
import styles from './FormLogin.module.css'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {
    const navigate = useNavigate()

    const goToRegister = (e) => {
        e.preventDefault()
        navigate('/register')
    }

    const goToHome = (e) => {
        e.preventDefault()
        navigate('/home')
    }
    return (
        <div className={`${styles.container}`}>
            <form>
                <div className={`${styles.fields}`}>
                    <label> Email</label>
                    <input type="text" placeholder='Digite seu email' />
                </div>
                <div className={`${styles.fields}`}>
                    <label>Password</label>
                    <input type="password" placeholder='Digite sua senha' />
                </div>
                <div className={`${styles.buttons}`}>
                    <button onClick={(e) => goToHome(e)}>Login</button>
                    <button onClick={(e) => goToRegister(e)}>Register</button>
                </div>
            </form>
        </div>
    )
}
export default FormLogin