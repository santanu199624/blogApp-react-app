import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-white mx-auto dark:bg-gray-600'>
        <div className='text-black text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 dark:text-white'>Welcome to Our Blog</h1>
            <p className='text-gray-500 lg:w-3/5 mx-auto mb-5'>Start your blog today and join a community of writers and readers who are passsionate about sharing their stories and ideas. We offer everything you need to get started, from helpfull tips and tutorials.</p>
            <div>
                <Link to="/" className="hover:text-orange-500 inline-flex items-center py-1 dark:text-white dark:hover:text-orange-500">Learn More<FaLongArrowAltRight className='mt-1 ml-2' /></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner
