import React from 'react'
import Error from '../error'
import '../../styles/location.css'
import Dropdown from '../../components/dropdown'

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
    if (!this.state.data) {
      return <Error />
    } else {
      const { title, location, description, equipment } = this.state.data
      console.log(this.state.data)
      return (
        <main className="location">
          <div className="carousel"></div>
          <div className="location__content">
            <div>
              <h2>{title}</h2>
              <p>{location}</p>
              <div className="tags">{/* TAG components */}</div>
            </div>
            <div>
              <div className="host">{/* HOST component */}</div>
              <div className="rating">{/* RATING component */}</div>
            </div>
            <Dropdown title="Description" text={description} />
            <Dropdown title="Équipements" text={equipment} />
          </div>
        </main>
      )
    }
  }
}
