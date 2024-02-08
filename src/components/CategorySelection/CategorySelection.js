import React from 'react'

const CategorySelection = ({onSelectCategory, activeCategory}) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"]
  return (
    <div className='px-4 mb-8 lg:space-x-12 sm:space-x-9 space-x-6 md:ml-4  flex flex-wrap items-center border-b-2 py-5 dark:text-white'>
      <button 
      className={`lg:ml-12 ${activeCategory ? "" : "active_btn"}`}
      onClick={()=>onSelectCategory(null)}>All</button>
      {
        categories.map((category) => {
            return (
            <button 
            onClick={() => onSelectCategory(category)}
            className={`mr-2 space-x-16 ${activeCategory === category ? "active_btn" : ""}`}
            key={category}>{category}</button>
            )
        })
      }
    </div>
  )
}

export default CategorySelection
