import React from 'react'
import CarouselControl from '../carouselControl'
import './carousel.css'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: null
    }
  }

  componentDidMount() {
    this.setState({
      current: 0
    })
  }

  updateCurrentVisibleMedia(direction) {
    if (direction === 'next') {
      if (this.props.data[this.state.current + 1]) {
        this.setState({
          current: this.state.current + 1
        })
      } else {
        this.setState({
          current: 0
        })
      }
    } else {
      if (this.props.data[this.state.current - 1]) {
        this.setState({
          current: this.state.current - 1
        })
      } else {
        this.setState({
          current: this.props.data.length - 1
        })
      }
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
            onClick={() => this.updateCurrentVisibleMedia('prev')}
          />
          {this.generateCarouselMedias()}
          <span className="currentCount">{`
            ${this.state.current + 1}/${this.props.data.length}
          `}</span>
          <CarouselControl
            className="nextBtn"
            onClick={() => this.updateCurrentVisibleMedia('next')}
          />
        </div>
      )
    } else {
      return <div className="carousel">{this.generateCarouselMedias()}</div>
    }
  }

  render() {
    // console.log(this.props.data)
    return this.generateCarouselContent()
  }
}
