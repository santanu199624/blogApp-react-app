import React from 'react'
import BlogPage from '../BlogPage/BlogPage'

const Blog = () => {
  return (
    <div>
      <div className='py-40 bg-white text-center text-black px-4 dark:bg-slate-600 dark:text-white'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Page</h2>
      </div>

      
      {/* All Blogs Container */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage />
      </div>
    </div>
  )
}

export default Blog
