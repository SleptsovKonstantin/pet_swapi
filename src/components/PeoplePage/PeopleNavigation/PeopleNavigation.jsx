import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({ getResourse, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResourse(nextPage)
  const handleChangePrev = () => getResourse(prevPage)
  return (
    <>
      <h1 className={styles.nav}>Navigation</h1>

      <div className={styles.container}>
        <Link to={`/people/?page=${counterPage - 1}`}>
          <button 
          onClick={handleChangePrev}
          disabled={!prevPage} 
          className={styles.button}>
            Previous
          </button>
        </Link>

        <Link to={`/people/?page=${counterPage + 1}`}>
          <button 
          onClick={handleChangeNext} 
          disabled={!nextPage}
          className={styles.button}>
            Next
          </button>
        </Link>
      </div>
    </>
  )
}

PeopleNavigation.propTypes = {
  getResourse: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
}

export default PeopleNavigation
