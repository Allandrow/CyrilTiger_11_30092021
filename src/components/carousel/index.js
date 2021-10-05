import React from 'react'
import CarouselControl from '../carouselControl'
import './carousel.css'

export default class Carousel extends React.Component {
  generateCarouselMedias() {
    return (
      <div className="medias">
        {this.props.data.map((image, i) => (
          <img src={image} alt="" className={i === 0 ? 'visible' : ''} />
        ))}
      </div>
    )
  }

  generateCarouselContent() {
    if (this.props.data.length > 1) {
      return (
        <div className="carousel">
          <CarouselControl className="prevBtn" />
          {this.generateCarouselMedias()}
          <span className="currentCount">1/{this.props.data.length}</span>
          <CarouselControl className="nextBtn" />
        </div>
      )
    } else {
      return <div className="carousel">{this.generateCarouselMedias()}</div>
    }
  }

  render() {
    console.log(this.props.data)
    return this.generateCarouselContent()
  }
}
