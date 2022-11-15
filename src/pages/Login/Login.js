import React from 'react'
import FormLogin from '../../components/FormLogin/FormLogin'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={`${styles.container}`}>
        <FormLogin/>
    </div>
  )
}

export default Login