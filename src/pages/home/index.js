import React from 'react'
import Banner from '../../components/banner'

export default class Home extends React.Component {
  render() {
    const title = (
      <h2>
        Chez vous, <br />
        partout et ailleurs
      </h2>
    )
    return (
      <main>
        <Banner title={title} />
      </main>
    )
  }
}
