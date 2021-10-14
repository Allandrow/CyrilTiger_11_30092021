import React from 'react'
import Arrow from '../arrow'

const CarouselControl = ({ className, trigger }) => {
  return (
    <button className={className} onClick={() => trigger()}>
      <Arrow />
    </button>
  )
}

export default CarouselControl
