import React from 'react'
import ratingFilled from '../../assets/star-filled.svg'
import ratingEmpty from '../../assets/star-empty.svg'
import './rating.css'

export default class Rating extends React.Component {
  generateRatingStars() {
    const stars = Array(5).fill(null)
    return (
      <div className="rating">
        {stars.map((star, i) => (
          <img
            key={i}
            src={i <= this.props.rating ? ratingFilled : ratingEmpty}
            alt=""
          />
        ))}
      </div>
    )
  }

  render() {
    return this.generateRatingStars()
  }
}
