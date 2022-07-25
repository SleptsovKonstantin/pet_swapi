import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const  Favorite = () => {
  const [count, setCount] = useState(0)

  const storeDate = useSelector(state => state.favoriteReducer)

  useEffect(() => {
    const length = Object.keys(storeDate).length
    
    setCount(length)
  })
  return (
    <div>
      <Link to='/favorites'>
        <span>Favorites {count}</span>
      </Link>
    </div>
  )
}
export default Favorite