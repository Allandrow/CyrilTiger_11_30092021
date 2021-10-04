import React from 'react'
import { ReactComponent as WhiteLogo } from '../../assets/logo-white.svg'
import './footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <WhiteLogo alt="Kasa" />
        <strong>© 2021 Kasa. All rights reserved</strong>
      </footer>
    )
  }
}
