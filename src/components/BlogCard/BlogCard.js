import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoPersonSharp } from "react-icons/io5";


const BlogCard = ({blogs, currentPage, selectedCategory, pageSize}) => {
    const filteredBlogs = blogs.filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
    // console.log(filteredBlogs)

    
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 '>
      {
        filteredBlogs.map((blog)=> {
            return(
                <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer dark:bg-slate-200 dark:shadow-slate-500'>
                    <div>
                        <img src={blog.image} alt="" className='w-full' />
                    </div>
                    <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
                    <p className='text-sm text-gray-500'><IoPersonSharp className='inline-flex items-center mr-2' />{blog.author}</p>
                    <p className='text-sm text-gray-500 mt-3'>Published: {blog.published_date}</p>
                    <p className='text-sm text-gray-500 mt-3'>Category: {blog.category}</p>
                </Link>
            )
        })
      }
      
      
    </div>
  )
}

export default BlogCard
