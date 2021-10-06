import React from 'react'
import Arrow from '../arrow'

export default class CarouselControl extends React.Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        <Arrow />
      </button>
    )
  }
}
