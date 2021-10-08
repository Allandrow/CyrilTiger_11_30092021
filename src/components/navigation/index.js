import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">A propos</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
