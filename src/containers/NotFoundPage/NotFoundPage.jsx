import React from 'react'
import { useLocation } from 'react-router'
import img from './img/oop.jpeg'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  const location = useLocation();
  
  return (
    <div className={styles.container}>
      <h1>NotFoundPage</h1>
      <img src={img} alt="NotFound" />
      <p>No match for <u>{location.pathname}</u></p>
    </div>
  )
}

export default NotFoundPage

