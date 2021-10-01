import React from 'react'
import '../../styles/banner.css'

export default class Banner extends React.Component {
  render() {
    return <div className="banner">{this.props.title}</div>
  }
}
