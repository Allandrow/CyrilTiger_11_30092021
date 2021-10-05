import React from 'react'
import Arrow from '../arrow'
import './dropdown.css'

export default class Dropdown extends React.Component {
  render() {
    return (
      <details className="dropdown">
        <summary>
          {this.props.title}
          <Arrow />
        </summary>
        <p>{this.props.text}</p>
      </details>
    )
  }
}
