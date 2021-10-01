import React from 'react'
import Banner from '../../components/banner'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.title = (
      <h2>
        Chez vous, <br />
        partout et ailleurs
      </h2>
    )
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    fetch('./data/data.json')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
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

  // Create component for list + location card
  createLocationList() {
    return (
      <ul>
        {this.state.data.map((location) => (
          <li key={location.id}>{location.title}</li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <main className="home">
        <Banner title={this.title} />
        {this.createLocationList()}
      </main>
    )
  }
}
