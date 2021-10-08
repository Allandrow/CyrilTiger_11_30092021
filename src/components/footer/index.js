import React from 'react'
import { ReactComponent as WhiteLogo } from '../../assets/logo-white.svg'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <WhiteLogo alt="Kasa" />
      <strong>© 2021 Kasa. All rights reserved</strong>
    </footer>
  )
}

export default Footer
