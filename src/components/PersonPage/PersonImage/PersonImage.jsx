import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { setPersonToFavorite, removePersonFromFavorites } from '@store/actions'

import styles from './PersonImage.module.css'

const PersonImage = ({ personPhoto, personName, personId}) => {
  const dispatch = useDispatch()

  const set = () => {
    dispatch(setPersonToFavorite({
      [personId]:{
        name: personName,
        img: personPhoto
      }
    }))
  }

  const remove = () => {
    dispatch(removePersonFromFavorites())
  }

  return (
    <>
      <div>
        <img src={personPhoto} alt={personName} />
      </div>
      <button onClick={set}>Добавить в избранное</button>
      <button onClick={remove}>Удалить из избранного</button>
    </>
  )
}

PersonImage.propTypes = {
  personId: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
}

export default PersonImage
