import { ReactComponent as KasaLogo } from '../../assets/logo.svg'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <h1>
      <Link to="/">
        <KasaLogo alt="Kasa" />
      </Link>
    </h1>
  )
}

export default Logo
