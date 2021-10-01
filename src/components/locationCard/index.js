import React from 'react'

export default class LocationCard extends React.Component {
  render() {
    return <li>{this.props.location.title}</li>
  }
}
