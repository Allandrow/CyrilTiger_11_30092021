import React from 'react'
import './locationContent.css'

export default class LocationContent extends React.Component {
  render() {
    const { title, location, host, tags } = this.props.data
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
          <div className="host">{host.name}</div>
          <div className="rating">{/* RATING component */}</div>
        </div>
      </div>
    )
  }
}
