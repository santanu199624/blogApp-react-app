import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [popularBlog, setPopularBlog] = useState([])
    const fetchData = async() => {
        const res = await fetch(`http://localhost:5000/blogs`)
        const data = await res.json()
        setPopularBlog(data.slice(0, 15))
    }

    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div>
        {/* Latest Blog */}
      <div>
        <h3 className='text-2xl font-semibold px-4 dark:text-white'>Latest Blogs</h3>
        <div className='mt-6 md:mr-5'>
            {
                popularBlog.length > 0 && popularBlog.slice(0,5).map((blog) => {
                    return<div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4 sm:ml-5 ml-5 dark:text-white'>
                            <h4>{blog.title}</h4>
                            <Link to="/" className="text-gray-400 hover:text-orange-500 inline-flex items-center py-1">Read More<FaLongArrowAltRight className='mt-1 ml-2' /></Link>
                        </div>
                })
            }
        </div>
      </div>

      {/* Popular Blog */}
      <div>
        <h3 className='text-2xl font-semibold px-4 dark:text-white'>Popular Blogs</h3>
        <div className='mt-6 md:mr-5'>
            {
                popularBlog.length > 0 && popularBlog.slice(6,11).map((blog) => {
                    return<div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4 sm:ml-5 ml-5 dark:text-white'>
                            <h4>{blog.title}</h4>
                            <Link to="/" className="text-gray-400 hover:text-orange-500 inline-flex items-center py-1">Read More<FaLongArrowAltRight className='mt-1 ml-2' /></Link>
                        </div>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default SideBar
