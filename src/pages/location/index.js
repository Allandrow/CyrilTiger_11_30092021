import React from 'react'

export default class Location extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
    this.id = this.props.match.params.id
  }

  componentDidMount() {
    fetch('../data/data.json')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.find((location) => location.id === this.id)
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    return (
      <main>
        <h2>{this.state.data.title}</h2>
      </main>
    )
  }
}
