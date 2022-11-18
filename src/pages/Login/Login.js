import React from 'react'
import FormLogin from '../../components/FormLogin/FormLogin'
import styles from './Login.module.css'
import {FaUserAstronaut} from 'react-icons/fa'

const Login = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.avatar}`}>
        <FaUserAstronaut size={80} className={`${styles.icon}`}/>
      </div>
        <FormLogin/>
    </div>
  )
}

export default Login