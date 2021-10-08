import React from 'react'
import ratingFilled from '../../assets/star-filled.svg'
import ratingEmpty from '../../assets/star-empty.svg'
import './rating.css'

const Rating = (props) => {
  const stars = Array(5).fill(null)
  return (
    <div className="rating">
      {stars.map((star, i) => (
        <img
          key={i}
          src={i <= props.rating ? ratingFilled : ratingEmpty}
          alt=""
        />
      ))}
    </div>
  )
}

export default Rating
