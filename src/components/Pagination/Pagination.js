import React from 'react'

const Pagination = ({onPageChange, blogs, pageSize, currentPage}) => {
    const totalPage = Math.ceil(blogs.length / pageSize)
    // console.log(totalPage)
    const renderPageLinks = () => {
        return Array.from({length: totalPage}, (_, i)=> i+1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="/" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <ul className='pagination flex-wrap gap-4 dark:text-white'>
        <li>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        </li>
        <div className='flex gap-1 dark:text-white'>{renderPageLinks()}</div>
        <li>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPage}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination
