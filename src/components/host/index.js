import React from 'react'
import './host.css'

export default class Host extends React.Component {
  splitHostName(name) {
    const [firstName, lastName] = name.split(' ')
    return (
      <h3>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </h3>
    )
  }

  render() {
    const { name, picture } = this.props.data
    return (
      <div className="host">
        {this.splitHostName(name)}
        <img src={picture} alt="" />
      </div>
    )
  }
}
