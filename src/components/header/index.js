import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../logo'


export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
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
      </header>
    )
  }
}
