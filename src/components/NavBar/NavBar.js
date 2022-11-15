import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
<nav className={`${styles.navBar}`}> 
    
    <div>Logo</div>
    <div>Infos</div>
    <div>Ações</div>
</nav>
  )
}

export default NavBar