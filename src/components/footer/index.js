import React from 'react'
import logo from '../../assets/logo-white.svg'
import './footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src={logo} alt="Kasa" />
        <strong>© 2021 Kasa. All rights reserved</strong>
      </footer>
    )
  }
}
