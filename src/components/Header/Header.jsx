import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/" exact={'true'}>
            <a>Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/people" exact={'true'}>
            <a>People</a>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
