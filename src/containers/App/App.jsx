import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import HomePage from '../HomePage'
import PeoplePage from '../PeoplePage'

// import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/people" exact>
          People
        </NavLink>
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/people" exact component={PeoplePage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
