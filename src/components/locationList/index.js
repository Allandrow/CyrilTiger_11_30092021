import React from 'react'
import LocationCard from '../locationCard'

const LocationList = ({data}) => {
  return (
    <section className="locationList">
      <ul>
        {data.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </ul>
    </section>
  )
}

export default LocationList
