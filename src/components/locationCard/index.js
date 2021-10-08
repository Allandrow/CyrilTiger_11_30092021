import React from 'react'
import { Link } from 'react-router-dom'
import './locationCard.css'

const LocationCard = (props) => {
  const { id, cover, title } = props.location
  return (
    <li>
      <Link to={`/location/${id}`} className="locationCard">
        <div className="imgGradient">
          <img src={cover} alt={title} />
        </div>
        <h3>{title}</h3>
      </Link>
    </li>
  )
}

export default LocationCard
