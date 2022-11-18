import React from 'react'
import styles from './FormRegister.module.css'
import { useNavigate } from 'react-router-dom'

const FormRegister = () => {
    const navigate = useNavigate()

    const goToRegister = (e) => {
        e.preventDefault()
        navigate('/')
    }

 
    return (
        <div className={`${styles.container}`}>
            <form>
                <div className={`${styles.fields}`}>
                    <label> Name</label>
                    <input type="text" placeholder='Digite seu nome' />
                </div>

                <div className={`${styles.fields}`}>
                    <label> Last Name</label>
                    <input type="text" placeholder='Digite seu sobrenome' />
                </div>

                <div className={`${styles.fields}`}>
                    <label> Email</label>
                    <input type="text" placeholder='Digite seu email' />
                </div>

                <div className={`${styles.fields}`}>
                    <label> CPF</label>
                    <input type="text" placeholder='Digite seu cpf' />
                </div>

                <div className={`${styles.fields}`}>
                    <label>Password</label>
                    <input type="password" placeholder='Digite sua senha' />
                </div>
                <div className={`${styles.fields}`}>
                    <label>Confirm Password</label>
                    <input type="password" placeholder='Confirme sua senha' />
                </div>


                <div className={`${styles.buttons}`}>
                    <button onClick={(e) => goToRegister(e)}>Salvar</button>
                    <button onClick={(e) => goToRegister(e)}>Voltar</button>
                </div>
            </form>
        </div>
    )
}
export default FormRegister