import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { setPersonToFavorite, removePersonFromFavorites } from '@store/actions'

import styles from './PersonImage.module.css'

const PersonImage = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch()

  const set = () => {
    dispatch(
      setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto,
        },
      })
    )
    setPersonFavorite(true)
  }

  const remove = () => {
    dispatch(removePersonFromFavorites( personId))
    setPersonFavorite(false)
  }

  return (
    <>
      <div>
        <img src={personPhoto} alt={personName} />
      </div>
      {personFavorite ? (
        <button onClick={remove}>Удалить из избранного</button>
        ) : (
        <button onClick={set}>Добавить в избранное</button>
      )}
    </>
  )
}

PersonImage.propTypes = {
  personId: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}

export default PersonImage
