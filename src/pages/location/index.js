import React, { useEffect, useState } from 'react'
import Error from '../error'
import Dropdown from '../../components/dropdown'
import MainLayout from '../../layout/mainLayout'
import LocationContent from '../../components/locationContent'
import Carousel from '../../components/carousel'
import './location.css'
import { useParams } from 'react-router'

const makeLocation = (data) => {
  const { description, equipments, pictures } = data
  return (
    <MainLayout>
      <main className="location">
        <Carousel data={pictures} />
        <LocationContent data={data} />
        <div className="dropdowns">
          <Dropdown title="Description" text={description} />
          <Dropdown title="Équipements" list={equipments} />
        </div>
      </main>
    </MainLayout>
  )
}

const Location = () => {
  const [data, setData] = useState(undefined)
  const [isLoaded, setLoadingStatus] = useState(false)
  const params = useParams()

  useEffect(() => {
    fetch('../data/data.json')
      .then((res) => res.json())
      .then(
        (result) => {
          if (!data) {
            setLoadingStatus(true)
            const data = result.find((location) => location.id === params.id)
            setData(data)
          }
        },
        (error) => {
          setLoadingStatus(true)
          console.error(error)
        }
      )
  })

  if (!isLoaded) return null
  if (isLoaded && data) return makeLocation(data)
  return <Error />
}

export default Location
