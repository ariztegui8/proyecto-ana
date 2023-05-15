import React from 'react'
import Home from '../components/home'
import Card from '../components/Card'

const index = () => {
  return (
    <div>
      <Home />

      <div className='mb-4'>
          <Card />
      </div>
    </div>
  )
}

export default index