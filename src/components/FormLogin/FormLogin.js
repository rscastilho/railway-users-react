import React, { useState } from 'react'
import styles from './FormLogin.module.css'
import { useNavigate } from 'react-router-dom'
import LoginApi from '../../api/LoginApi'
import Swal from 'sweetalert2'


const FormLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const result = await LoginApi({ email, password })
            if (result.data.token) {
                localStorage.clear()
                localStorage.setItem('@id', result.data[0].id)
                localStorage.setItem('@name', result.data[0].name)
                localStorage.setItem('@email', result.data[0].email)
                localStorage.setItem('@token', result.token)
                navigate('/home')
                Toast.fire({
                    icon: 'success',
                    text: result.message
                })

            } else {
                // Swal.fire({
                //     title:'Erro ao tentar logar no sistema',
                //     text: result.message,
                //     icon:'error',
                //     confirmButtonColor:'',
                //     confirmButtonText:'OK', 
                //     buttonsStyling:true
                // })
                Toast.fire({
                    icon: 'warning',
                    text: result.message
                })
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
            <form>
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
                    <button onClick={(e) => handleLogin(e)} disabled={!email || !password ? true : false}>Login</button>
                    <button onClick={(e) => goToRegister(e)}>Register</button>
                </div>
            </form>
        </div>
    )
}
export default FormLogin