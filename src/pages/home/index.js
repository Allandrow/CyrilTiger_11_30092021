import React from 'react'
import Banner from '../../components/banner'
import LocationList from '../../components/locationList'
import MainLayout from '../../layout/mainLayout'
import './home.css'

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

  render() {
    return (
      <MainLayout>
        <main className="home">
          <Banner title={this.title} />
          <LocationList data={this.state.data} />
        </main>
      </MainLayout>
    )
  }
}
