import React from 'react'
import styles from './NavBar.module.css'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiExpress, SiMysql } from 'react-icons/si'
import { BiRegistered } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className={`${styles.navBar}`}>
      <div>App.rCast <BiRegistered className={`${styles.react}`} /></div>
      <div>
        <Link to={'/'} className={`${styles.link}`}>
          <FaReact size={'3em'} color={'white'} className={`${styles.react}`} />
          <FaNodeJs size={'3em'} color={'white'} className={`${styles.react}`} />
          <IoLogoJavascript size={'3em'} color={'white'} className={`${styles.react}`} />
          <SiExpress size={'3em'} color={'white'} className={`${styles.react}`} />
          <SiMysql size={'3em'} color={'white'} className={`${styles.react}`} />
        </Link>
      </div>
      <div>.Login / Logout.</div>
    </nav>
  )
}

export default NavBar