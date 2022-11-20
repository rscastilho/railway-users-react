import React, { useState } from 'react'
import styles from './FormRegister.module.css'
import { useNavigate } from 'react-router-dom'
import RegisterApi from '../../api/RegisterApi'
import swalMessage from './../Messages/swalMessage';
import toatMessage from './../Messages/toastMessage';

const FormRegister = () => {
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [password, setPassWord] = useState()
    const [confirmarPassword, setConfirmarPassWord] = useState()
    const [isloading, setIsLoading] = useState(false)

    const goToRegister = async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            const result = await RegisterApi({ name, lastName, email, cpf, password, confirmarPassword })
            if (result.response) {
                if (result.response.status === 400 || result.response.status === 422) {
                    swalMessage(result.response.data.message, 'Erro ao tentar cadastrar usuário', 'error')
                    setIsLoading(false)
                    return
                } else {
                    if (result.status === 200) {
                        setIsLoading(true)
                        toatMessage('success', result.data.message)
                        setIsLoading(false)
                        navigate('/')
                        return
                    }
                }
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={`${styles.container}`}>
            <form>
                <div className={`${styles.fields}`}>
                    <label> Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Digite seu nome'
                    />
                </div>

                <div className={`${styles.fields}`}>
                    <label> Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Digite seu sobrenome'
                    />
                </div>

                <div className={`${styles.fields}`}>
                    <label> Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Digite seu email'
                    />
                </div>

                <div className={`${styles.fields}`}>
                    <label> CPF</label>
                    <input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder='Digite seu cpf'
                    />
                </div>

                <div className={`${styles.fields}`}>
                    <label>Password</label>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                        placeholder='Digite sua senha'
                    />
                </div>
                <div className={`${styles.fields}`}>
                    <label>Confirm Password</label>
                    <input type="password"
                        value={confirmarPassword}
                        onChange={(e) => setConfirmarPassWord(e.target.value)}
                        placeholder='Confirme sua senha'
                    />
                </div>


                <div className={`${styles.buttons}`}>
                    <button
                        onClick={(e) => goToRegister(e)}
                        style={{
                            width: `${isloading ? '100%' : ''}`,
                            backgroundColor: `${isloading ? 'orange' : ''}`,
                            color: `${isloading ? 'black' : ''}`,
                            border: `${isloading ? 0 : ''}`
                        }}
                    >
                        {isloading ? 'Processando...' : 'Salvar'}
                    </button>
                    <button
                        onClick={(e) => navigate('/')}
                        style={{ display: `${isloading ? 'none' : ''}` }}
                    >Voltar</button>
                </div>
            </form>
        </div>
    )
}
export default FormRegister