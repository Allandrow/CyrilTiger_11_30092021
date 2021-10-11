import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
