import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import { getApiResourse } from '@utils/network'
import { API_SEARCH } from '@constans/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import {
  getPeopleId,
  getPeopleImage,
} from '@services/getPeopleData'
import { debounce } from 'lodash'
import PeopleList from '@components/PeoplePage/PeopleList'

import icon from './img/cross.png'

import styles from './SearchPage.module.css'

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [people, setPeople] = useState([])

  const getResponce = async (param) => {
    const res = await getApiResourse(API_SEARCH + param)

    if (res) {
      console.log(res)
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
    getResponce('')
  }, [])

  const debouncedGetResponce = useCallback(
    debounce((value) => getResponce(value), 300),
    []
  )

  const handleInputChange = (event) => {
    const value = event.target.value

    setInputSearchValue(value)
    debouncedGetResponce(value)
  }

  return (
    <>
      <div>
        <h1>Search</h1>
        <div className={styles.container}>
          <input
            type="text"
            value={inputSearchValue}
            onChange={handleInputChange}
            placeholder="input characters name"
          />
          <img
            onClick={() => { 
              setInputSearchValue(''),
              debouncedGetResponce('')}
            }
            src={icon}
            className={styles.cross}
            alt="Clear"
          />
        </div>
      </div>
      <PeopleList people={people} />
    </>
  )
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage)
