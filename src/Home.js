import React from 'react'
import Header from './Header'
import Section from './Section'

function Home() {
  return (
    <>
      <Header />
      <Section
        name='Model 3'
        title='Order Online for touchless delivery'
        leftbtn='CUSTOM ORDER'
        rightbtn='EXISTING INVENTORY'
        arrow={true}
        background='model-3.jpg'
      />

      <Section
        name='Model Y'
        title='Order Online for touchless delivery'
        leftbtn='CUSTOM ORDER'
        rightbtn='EXISTING INVENTORY'
        background='model-y.jpg'
      />

      <Section
        name='Model S'
        title='Order Online for touchless delivery'
        leftbtn='CUSTOM ORDER'
        rightbtn='EXISTING INVENTORY'
        background='model-s.jpg'
      />

      <Section
        name='Model X'
        title='Order Online for touchless delivery'
        leftbtn='CUSTOM ORDER'
        rightbtn='EXISTING INVENTORY'
        background='model-x.jpg'
      />

      <Section
        name='Solar Panels'
        title='Lower Cost Solar Panels in India'
        leftbtn='ORDER NOW'
        rightbtn='Lern More'
        background='solar-panel.jpg'
      />

      <Section
        name='Solar Roof'
        title='Product Clean Energy from your roof'
        leftbtn='CUSTOM ORDER'
        rightbtn='Lern More'
        background='solar-roof.jpg'
      />

      <Section
        name='Accessories'
        leftbtn='ORDER NOW'
        background='accessories.jpg'
      />

    </>
  )
}

export default Home