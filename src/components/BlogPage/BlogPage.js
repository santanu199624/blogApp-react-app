import React, { useEffect, useState } from 'react'
import BlogCard from '../BlogCard/BlogCard'
import Pagination from '../Pagination/Pagination'
import CategorySelection from '../CategorySelection/CategorySelection'
import SideBar from '../SideBar/SideBar'

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 //blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)

    const fetchData = async() => {
        let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`

        //filter by category
        if(selectedCategory){
            url += `&category=${selectedCategory}`
        }

        const res = await fetch(url)
        const data = await res.json()
        // console.log(data)
        setBlogs(data)
    }

    useEffect(() => {
        fetchData()
    }, [currentPage, pageSize, selectedCategory])

    //Page changing btn
    const handlePageChange = (pageSize) => {
    setCurrentPage(pageSize)
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
        setCurrentPage(1)
        setActiveCategory(category)

    }

  return (
    <div>
      {/* Category Section */}
      <div>
        <CategorySelection 
        onSelectCategory={handleCategoryChange}
        activeCategory={activeCategory}
        selectedCategory={selectedCategory}
        />
      </div>

      {/* Blog cards */}
      <div className='flex flex-col lg:flex-row gap-12'>
        {/* blog card component */}
        <BlogCard 
            blogs={blogs} 
            currentPage={currentPage} 
            selectedCategory={selectedCategory} 
            pageSize={pageSize}
        />

        {/* side bar component */}
        <div>
          <SideBar />
        </div>
      </div>

      {/* Pagination section */}
      <div className='mt-6'>
        <Pagination 
            currentPage={currentPage} 
            blogs={blogs}
            pageSize={pageSize}
            onPageChange = {handlePageChange}
        />
      </div>

    </div>
  )
}

export default BlogPage
