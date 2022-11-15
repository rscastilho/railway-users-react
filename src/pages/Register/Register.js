import React from 'react'
import styles from '../Login/Login.module.css'
import FormRegister from './../../components/FormRegister/FormRegister';

const Register = () => {
  return (
    <div className={`${styles.container}`}>
        <FormRegister/>
    </div>
  )
}

export default Register