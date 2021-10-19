import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const cars = [
  {
    id: 0,
    title: 'Model S',
    description: 'Order Online for Touchless Delivery',
    image:require('./images/model-s.jpg'),
    range: '390',
    time: '1.99',
    topSpeed: '200',
    peakPower: '1,020',
  },
  {
    id: 1,
    title: 'Model 3',
    description: 'Order Online for Touchless Delivery',
    image: './images/model-3.jpg',
    range: '400',
    time: '2.99',
    topSpeed: '180',
    peakPower: '900',
  },
  {
    id: 2,
    title: 'Model X',
    description: 'Order Online for Touchless Delivery',
    image: './images/model-x.jpg',
    range: '350',
    time: '1.55',
    topSpeed: '150',
    peakPower: '1,130',
  },
  {
    id: 3,
    title: 'Model Y',
    description: 'Order Online for Touchless Delivery',
    image: './images/model-y.jpg',
    range: '410',
    time: '2.05',
    topSpeed: '190',
    peakPower: '1,040',
  },
]
const Home = () => {
  return (
    <Container>
      {cars.map((car) => {
        return (
          <Section
            key={car.id}
            title={car.title}
            description={car.description}
            backgroundImage={car.image}
            leftBtn='custome order'
            rightBtn='existing inventory'
          />
        )
      })}
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        leftBtn='Order Now'
        rightBtn='learn more'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        leftBtn='Order Now'
        rightBtn='learn more'
      />
      <Section
        title='Accessories'
        description='A Charger'
        leftBtn='Shop now'
       
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
