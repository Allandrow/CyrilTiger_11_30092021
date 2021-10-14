import React from 'react'
import Arrow from '../arrow'

const CarouselControl = ({ className, trigger, direction }) => {
  return (
    <button className={className} onClick={() => trigger(direction)}>
      <Arrow />
    </button>
  )
}

export default CarouselControl
