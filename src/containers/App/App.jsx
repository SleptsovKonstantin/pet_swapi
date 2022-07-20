import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import HomePage from '../HomePage'
import PeoplePage from '../PeoplePage'

// import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/" exact={'true'}>
          Home
        </NavLink>
        <NavLink to="/people" exact={'true'}>
          People
        </NavLink>
        <Routes>
          <Route path="/" exact={'true'} element={<HomePage/>} />
          <Route path="/people" exact={'true'} element={<PeoplePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
