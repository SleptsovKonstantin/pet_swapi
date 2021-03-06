import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PeopleList from '@components/PeoplePage/PeopleList'
import styles from './FavoritePage.module.css'

const FavoritePage = () => {
  const [people, setPeople] = useState([])

  const storeDate = useSelector((state) => state.favoriteReducer)

  useEffect(() => {
    const arr = Object.entries(storeDate)

    if(arr.length) {
      const res = arr.map(item => {

        return {
          id: item[0],
          name: item[1].name,
          img: item[1].img
        }

      })
      setPeople(res)
    }
  }, [])

  return (
    <>
      <h1>Favourite People</h1>
      <PeopleList people={people}/>
    </>
  )
}

export default FavoritePage
