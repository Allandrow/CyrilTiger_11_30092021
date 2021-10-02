import React from 'react'
import { Link } from 'react-router-dom'

export default class LocationCard extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/location/${this.props.location.id}`}>
          <h3>{this.props.location.title}</h3>
        </Link>
      </li>
    )
  }
}
