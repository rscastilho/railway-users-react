import React from 'react'
import styles from '../Login/Login.module.css'
import FormRegister from './../../components/FormRegister/FormRegister';
import {FiDatabase} from 'react-icons/fi'

const Register = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.avatar}`}>
      <FiDatabase size={60} className={`${styles.icon}`}/>

      </div>
        <FormRegister/>
    </div>
  )
}

export default Register