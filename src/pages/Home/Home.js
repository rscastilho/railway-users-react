import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import styles from './Home.module.css'

const Home = () => {

  return (
    <div>
      <NavBar />
      <div className={`${styles.content}`}>
        <div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home