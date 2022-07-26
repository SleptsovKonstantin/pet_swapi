import React from 'react';
import PropTypes from 'prop-types'
import PeopleList from '@components/PeoplePage/PeopleList'

import styles from './SearchPageInfo.module.css'

const SearchPageInfo = ({ people }) => {
  return (
    <>
      {people.length 
        ? <PeopleList people={people}/>
        : <h1 className={styles.inscription}>not found people</h1>
      }
    </>
  );
}

SearchPageInfo.propTypes = {
  people: PropTypes.array,
}

export default SearchPageInfo;