import React from 'react'
import NavBar from './../../components/NavBar/NavBar';
import styles from '../Home/Home.module.css'
import {useNavigate} from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <NavBar />
      <div className={`${styles.content}`}>
        <button onClick={()=>navigate('/home')} style={{cursor:'pointer'}}>Voltar</button>
      </div>
    </>
  )
}

export default About