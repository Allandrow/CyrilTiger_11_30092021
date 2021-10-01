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
  }
  render() {
    return (
      <main className="home">
        <Banner title={this.title} />
      </main>
    )
  }
}
