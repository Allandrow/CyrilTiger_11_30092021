import React from 'react'
import LocationCard from '../locationCard'

const LocationList = (props) => {
  return (
    <section className="locationList">
      <ul>
        {props.data.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </ul>
    </section>
  )
}

export default LocationList
