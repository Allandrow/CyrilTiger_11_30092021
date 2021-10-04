import React from 'react'
import logo from '../../assets/logo-white.svg'
import '../../styles/footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src={logo} alt="Kasa" />
        <strong>© 2020 Kasa. All rights reserved</strong>
      </footer>
    )
  }
}
