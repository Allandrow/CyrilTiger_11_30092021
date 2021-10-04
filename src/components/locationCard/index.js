import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/locationCard.css'

export default class LocationCard extends React.Component {
  render() {
    return (
      <li>
        <Link
          to={`/location/${this.props.location.id}`}
          className="locationCard"
        >
          <div className="imgGradient">
            <img
              src={this.props.location.cover}
              alt={this.props.location.title}
            />
          </div>
          <h3>{this.props.location.title}</h3>
        </Link>
      </li>
    )
  }
}
