import React from 'react'
import Banner from '../../components/banner'
import LocationList from '../../components/locationList'
import MainLayout from '../../layout/mainLayout'
import { useQuery } from 'react-query'
import Error from '../error'
import './home.css'

const fetchLocations = async () => {
  try {
    const response = await fetch('./data/data.json')
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const Home = () => {
  const { isLoading, data, isError } = useQuery('locations', fetchLocations)
  const title = (
    <h2>
      Chez vous, <br />
      partout et ailleurs
    </h2>
  )

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <Error />
  }

  return (
    <MainLayout>
      <main className="home">
        <Banner title={title} />
        <LocationList data={data} />
      </main>
    </MainLayout>
  )
}

export default Home
