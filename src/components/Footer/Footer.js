import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-200 mt-7 pb-7'>
      <div className='px-4 pt-16 mx-auto lg:max-w-screen-xl md:max-w-full sm:max-w-xl lg:px-4 md:px-24'>
        <div>
          <div className='grid grid-cols-3 gap-5 lg:col-span-4 md:grid-cols-4'>
            {/* Category */}
            <div>
              <p className='font-medium tracking-wide'>Category</p>
              <ul className='mt-2 space-y-2 '>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
                </li>
              </ul>
            </div>
            {/* Apples */}
            <div>
              <p className='font-medium tracking-wide'>Apples</p>
              <ul className='mt-2 space-y-2 '>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>eCommerce</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a>
                </li>
              </ul>
            </div>
          {/* About */}
            <div>
              <p className='font-medium tracking-wide'>About Us</p>
              <ul className='mt-2 space-y-2 '>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Git-Hub</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Experience</a>
                </li>
              </ul>
            </div>

            <div>
              <p className='font-medium tracking-wide'>About Us</p>
              <ul className='mt-2 space-y-2 '>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Git-Hub</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Experience</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
