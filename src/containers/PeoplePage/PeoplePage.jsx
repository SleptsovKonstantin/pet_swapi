import React, { useState, useEffect } from 'react'
import { getApiResourse } from '../../utils/network'
import { API_PEOPLE } from '../../constans/api'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData'

// import styles from "./PeoplePage.module.css";

const PeoplePage = () => {
  const [people, setPeople] = useState(null)

  const getResourse = async (url) => {
    const res = await getApiResourse(url)

    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url)
      const img = getPeopleImage(id)
      console.log(img)

      return { id, name, img }
    })

    setPeople(peopleList)

    console.log('people', people)
  }

  useEffect(() => {
    getResourse(API_PEOPLE)
  }, [])

  return (
    <>
      {people && (
        <ul>
          {people.map(({ id, name, img }) => (
            <li key={id}>
                <img src={img} alt={name} />
                <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default PeoplePage
