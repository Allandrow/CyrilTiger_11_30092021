import React from 'react'

export default class LocationList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.data.map((location) => (
          <li key={location.id}>{location.title}</li>
        ))}
      </ul>
    )
  }
}
