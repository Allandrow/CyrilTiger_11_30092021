import React from 'react'
import LocationCard from '../locationCard'

export default class LocationList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.data.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </ul>
    )
  }
}
