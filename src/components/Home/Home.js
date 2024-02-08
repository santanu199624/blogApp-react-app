import React from 'react'
import Banner from '../Banner/Banner'
import BlogPage from '../BlogPage/BlogPage'

const Home = () => {
  return (
    <div className=''>
      <Banner />

      <div className='max-w-7xl mx-auto'>
        <BlogPage />
      </div>
    </div>
  )
}

export default Home
