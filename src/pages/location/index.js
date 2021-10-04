import React from 'react'
import Error from '../error'
import Dropdown from '../../components/dropdown'
import './location.css'
import MainLayout from '../../layout/mainLayout'

export default class Location extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: undefined
    }
  }

  getLocation() {
    fetch('../data/data.json')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.find(
              (location) => location.id === this.props.match.params.id
            )
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

  componentDidMount() {
    this.getLocation()
  }

  render() {
    const { isLoaded, data } = this.state
    if (!isLoaded) return null
    if (isLoaded && data) {
      const { title, location, description, equipment, host } = this.state.data
      return (
        <MainLayout>
          <main className="location">
            <div className="carousel"></div>
            <div className="location__content">
              <div>
                <h2>{title}</h2>
                <p>{location}</p>
                <div className="tags">{/* TAGS */}</div>
              </div>
              <div>
                <div className="host">{host.name}</div>
                <div className="rating">{/* RATING component */}</div>
              </div>
              <Dropdown title="Description" text={description} />
              <Dropdown title="Équipements" text={equipment} />
            </div>
          </main>
        </MainLayout>
      )
    } else {
      return <Error />
    }
  }
}
