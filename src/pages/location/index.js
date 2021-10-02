import React from 'react'

export default class Location extends React.Component {
  render() {
    console.log(this.props.match.params.id)
    return <h2>Hello</h2>
  }
}
