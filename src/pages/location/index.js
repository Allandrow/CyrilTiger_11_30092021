import React from 'react'
import Error from '../error'
import Dropdown from '../../components/dropdown'
import MainLayout from '../../layout/mainLayout'
import LocationContent from '../../components/locationContent'
import Carousel from '../../components/carousel'
import './location.css'

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

  makeLocation() {
    const { description, equipments, pictures } = this.state.data
    return (
      <MainLayout>
        <main className="location">
          <Carousel data={pictures} />
          <LocationContent data={this.state.data} />
          <Dropdown title="Description" text={description} />
          <Dropdown title="Équipements" list={equipments} />
        </main>
      </MainLayout>
    )
  }

  render() {
    const { isLoaded, data } = this.state
    if (!isLoaded) return null
    if (isLoaded && data) return this.makeLocation()
    return <Error />
  }
}
