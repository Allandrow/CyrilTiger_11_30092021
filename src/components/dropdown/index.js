import React from 'react'
import Arrow from '../arrow'
import './dropdown.css'

export default class Dropdown extends React.Component {
  generateContent() {
    if (this.props.text) {
      return <p>{this.props.text}</p>
    }
    if (this.props.list) {
      return (
        <ul className="dropdownList">
          {this.props.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    }
  }

  render() {
    return (
      <details className="dropdown">
        <summary>
          {this.props.title}
          <Arrow />
        </summary>
        <div>{this.generateContent()}</div>
      </details>
    )
  }
}
