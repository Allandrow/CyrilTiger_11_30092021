import React from 'react'
import arrow from '../../assets/arrow.svg'
import '../../styles/dropdown.css'

export default class Dropdown extends React.Component {
  render() {
    return (
      <details className="dropdown">
        <summary>
          {this.props.title}
          <img src={arrow} alt="arrow" />
        </summary>
        <p>{this.props.text}</p>
      </details>
    )
  }
}
