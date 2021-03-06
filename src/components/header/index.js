import React from 'react'
import Logo from '../logo'
import Navigation from '../navigation'
import './header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <Navigation />
      </header>
    )
  }
}
