import React from 'react'
import CarouselControl from '../carouselControl'
import './carousel.css'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
    this.updateCurrentVisibleMedia = this.updateCurrentVisibleMedia.bind(this)
  }

  updateCurrentVisibleMedia(direction) {
    if (direction === 'next') {
      const next = this.state.current + 1
      this.setState({
        current: this.props.data[next] ? next : 0
      })
    } else {
      const previous = this.state.current - 1
      this.setState({
        current: this.props.data[previous]
          ? previous
          : this.props.data.length - 1
      })
    }
  }

  generateCarouselMedias() {
    return (
      <div className="medias">
        {this.props.data.map((image, i) => (
          <img
            key={i}
            src={image}
            alt=""
            className={i === this.state.current ? 'visible' : ''}
          />
        ))}
      </div>
    )
  }

  generateCarouselContent() {
    if (this.props.data.length > 1) {
      return (
        <div className="carousel">
          <CarouselControl
            className="prevBtn"
            onClick={this.updateCurrentVisibleMedia}
            direction={'previous'}
          />
          {this.generateCarouselMedias()}
          <span className="currentCount">
            {`${this.state.current + 1}/${this.props.data.length}`}
          </span>
          <CarouselControl
            className="nextBtn"
            onClick={this.updateCurrentVisibleMedia}
            direction={'next'}
          />
        </div>
      )
    } else {
      return <div className="carousel">{this.generateCarouselMedias()}</div>
    }
  }

  render() {
    return this.generateCarouselContent()
  }
}
