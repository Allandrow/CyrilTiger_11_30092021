import { React, useState } from 'react'
import CarouselControl from '../carouselControl'
import './carousel.css'

const generateCarouselMedias = (data, index) => {
  return (
    <div className="medias">
      {data.map((image, i) => (
        <img
          key={i}
          src={image}
          alt=""
          className={i === index ? 'visible' : ''}
        />
      ))}
    </div>
  )
}

const updateCurrentVisibleMedia = (index, direction, setIndex, data) => {
  if (direction === 'next') {
    const next = index + 1
    data[next] ? setIndex(next) : setIndex(0)
  } else {
    const previous = index - 1
    data[previous] ? setIndex(previous) : setIndex(data.length - 1)
  }
}

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (data.length > 1) {
    return (
      <div className="carousel">
        <CarouselControl
          className="prevBtn"
          trigger={() =>
            updateCurrentVisibleMedia(
              currentIndex,
              'previous',
              setCurrentIndex,
              data
            )
          }
        />
        {generateCarouselMedias(data, currentIndex)}
        <span className="currentCount">{`
        ${currentIndex + 1}/${data.length}
      `}</span>
        <CarouselControl
          className="nextBtn"
          trigger={() =>
            updateCurrentVisibleMedia(
              currentIndex,
              'next',
              setCurrentIndex,
              data
            )
          }
        />
      </div>
    )
  } else {
    return (
      <div className="carousel">
        {generateCarouselMedias(data, currentIndex)}
      </div>
    )
  }
}

export default Carousel
