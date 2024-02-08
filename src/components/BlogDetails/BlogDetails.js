import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { IoIosPerson } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import SideBar from '../SideBar/SideBar';

const BlogDetails = () => {

    const data = useLoaderData()
    // console.log(data)
    const {title, image, category, author, published_date, reading_time, content} = data
  return (
    <div className=''>
      <div className='py-40 text-center text-black px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 dark:text-white'>Blog Details</h2>

        {/* blog details */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 '>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt="" className='w-full mx-auto rounded' />
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer dark:text-white dark:text-white'>{title}</h2>
                <p className='mb-3 text-gray-600 dark:text-white'>
                    <IoIosPerson className='inline-flex items-center mr-2 text-2xl dark:text-white' /> {author} | {published_date}
                </p>
                <p className='mb-3 text-gray-600 dark:text-white'>
                    <FaClock className='inline-flex items-center mr-2 text-2xl dark:text-white' /> {reading_time}
                </p>
                <p className='text-sm text-gray-500 mb-6 dark:text-white'>{content}</p>
                <div className='text-base text-gray-500 dark:text-white'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti soluta accusantium id fugiat voluptatem tempora quia perferendis possimus optio.</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti soluta accusantium id fugiat voluptatem tempora quia perferendis possimus optio.</p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti soluta accusantium id fugiat voluptatem tempora quia perferendis possimus optio.</p>
                </div>
                
            </div>

        {/* Side Bar */}
        <div className='lg:w-1/2'>
            <SideBar />
        </div>

        </div>
      </div>
    </div>
  )
}

export default BlogDetails
