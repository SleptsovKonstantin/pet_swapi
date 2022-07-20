import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi'
import PeopleList from '@components/PeoplePage/PeopleList'
import { getApiResourse } from '@utils/network'
import { API_PEOPLE } from '@constans/api'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'

import styles from '@containers/PeoplePage/PeoplePage.module.css'

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null)

  const getResourse = async (url) => {
    const res = await getApiResourse(1+url)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)

        return {
          id,
          name,
          img,
        }
      })

      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResourse(API_PEOPLE)
  }, [])

  return (
    <>
      <h1 className={styles.nav}>Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  )
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage)
