import React from 'react'
import Host from '../host'
import Rating from '../rating'
import './locationContent.css'

const LocationContent = ({ data }) => {
  const { title, location, host, tags, rating } = data
  return (
    <div className="location__content">
      <div>
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="tags">
          <ul>
            {tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Rating rating={rating} />
        <Host data={host} />
      </div>
    </div>
  )
}

export default LocationContent
