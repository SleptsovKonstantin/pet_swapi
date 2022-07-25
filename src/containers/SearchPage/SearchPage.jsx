import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getApiResourse } from '@utils/network'
import { API_SEARCH } from '@constans/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from '@services/getPeopleData'
import SearchPageInfo from '@components/SearchPage/SearchPageInfo'
import PeopleList from '@components/PeoplePage/PeopleList'
import SearchNavigation from '@components/PeoplePage/SearchNavigation'

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [people, setPeople] = useState([])
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [counterPage, setCounterPage] = useState(1)

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
      setPrevPage(changeHTTP(res.previous))
      setNextPage(changeHTTP(res.next))
      setCounterPage(getPeoplePageId(url))
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }


    // setErrorApi(!res);
  }

  const handleInputChange = (event) => {
    const value = event.target.value

    setInputSearchValue(value)
    getResponce(value)
  }

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
        placeholder="input characters name"
      ></input>
      {/* <SearchPageInfo people={people} /> */}
      <SearchNavigation
        getResponce={getResponce}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      <PeopleList people={people} />
    </div>
  )
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage)
