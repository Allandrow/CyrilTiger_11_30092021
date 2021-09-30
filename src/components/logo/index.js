import logo from '../../logo.svg'
import React from 'react'
import { Link } from 'react-router-dom'

export default class Logo extends React.Component {
  render() {
    return (
      <h1>
        <Link to="/">
          <img src={logo} alt="Kasa" />
        </Link>
      </h1>
    )
  }
}
