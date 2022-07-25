import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './SearchNavigation.module.css'

const SearchNavigation = ({ getResponce, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResponce(nextPage)
  const handleChangePrev = () => getResponce(prevPage)
  return (
    <>
      <h1 className={styles.nav}>Navigation</h1>

      <div className={styles.container}>
        <Link to={`/people/?search=${counterPage - 1}`}>
          <button 
          onClick={handleChangePrev}
          disabled={!prevPage} 
          className={styles.button}>
            Previous
          </button>
        </Link>

        <Link to={`/people/?search=${counterPage + 1}`}>
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

SearchNavigation.propTypes = {
  getResponce: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
}

export default SearchNavigation
