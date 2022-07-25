import React from 'react'
import { NavLink } from 'react-router-dom'
import Favorite from '@components/Favorite'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact={'true'}>
            NotFoundPage
          </NavLink>
        </li>
      <Favorite />
      </ul>
    </div>
  )
}

export default Header
