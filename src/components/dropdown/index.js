import React from 'react'
import arrow from '../../assets/arrow.svg'

export default class Dropdown extends React.Component {
  render() {
    return (
      <details>
        <summary>
          {this.props.title}
          <img src={arrow} alt="arrow" />
        </summary>
        <p>{this.props.text}</p>
      </details>
    )
  }
}
