import React, { useState } from 'react'
import styles from './FormLogin.module.css'
import { useNavigate } from 'react-router-dom'
import LoginApi from '../../api/LoginApi'
import { Toast } from '../Messages/ToastFormat';
import toastMessage from '../Messages/toastMessage';
import swalMessage from '../Messages/swalMessage';


const FormLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const result = await LoginApi({ email, password })
            if (result.token) {
                navigate('/home')
                localStorage.clear()
                localStorage.setItem('@id', result.data[0].id)
                localStorage.setItem('@name', result.data[0].name)
                localStorage.setItem('@email', result.data[0].email)
                localStorage.setItem('@token', result.token)
                toastMessage('success', result.message)
            } else {

                swalMessage('Erro ao processar informações', result.message, 'error')

                localStorage.clear()
            }
        } catch (error) {
            console.log(error)
            Toast.fire({
                icon: 'error',
                text: error.message
            })
            localStorage.clear()
        }
    }

    const goToRegister = (e) => {
        e.preventDefault()
    }


    return (
        <div className={`${styles.container}`}>
            <form className={styles.frm}>
                <div className={`${styles.fields}`}>
                    <label> Email</label>
                    <input type="text"
                        placeholder='Digite seu email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className={`${styles.fields}`}>
                    <label>Password</label>
                    <input type="password"
                        placeholder='Digite sua senha'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className={`${styles.buttons}`}>
                    <button className={styles.btn} onClick={(e) => handleLogin(e)} disabled={!email || !password ? true : false}>Login</button>
                    <button className={styles.btn} onClick={(e) => goToRegister(e)}>Register</button>
                </div>
            </form>
        </div>
    )
}
export default FormLogin