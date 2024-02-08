import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import Modal from '../Modal/Modal';
import Theme from '../Theme/Theme';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // console.log("clicked")
  }

  // navItems
  const navItems = [
    {path: "/", link: "Home"},
    {path: "/services", link: "Services"},
    {path: "/about", link: "About"},
    {path: "/blogs", link: "Blogs"},
    {path: "/contact", link: "Contact"},
  ]

  // Modal details

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <header className='bg-white dark:bg-slate-700 border-b-[1px] fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-xl font-bold text-black dark:text-white'>Blog<span className='text-orange-500'>SM</span></a>

        {/* navItems for lg devices */}

        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map(({path, link}) => {
              return(
                <li className='text-black dark:text-white' key={path}>
                  <NavLink
                  className={({isActive, isPending}) =>
                    isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                  }
                  to={path}>{link}</NavLink>
                </li>
              )
            })
          }
        </ul>

        {/* Menu Icons */}
          <div className='lg:flex gap-4 items-center hidden text-xl dark:text-white'>
            <Theme />
            <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
            <a href="/" className='hover:text-orange-500'><FaDribbbleSquare /></a>
            <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
            <button onClick={openModal} className='bg-orange-500 text-white px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log In</button>
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal} />

          {/* mobile menu btn display on mobile device */}
          <div className='md:hidden'>
            <button onClick={handleMenu}>
              {
                isMenuOpen? <FaXmark className='text-2xl hover:text-orange-500' /> : <GiHamburgerMenu className='text-2xl hover:text-orange-500'/>
              }
            </button>
          </div>
      </nav>

      {/* Menu Item only for Mobile */}
      <div>
      <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen? "fixed top-0 right-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            navItems.map(({path, link}) => {
              return(
                <li className='text-black' key={path}>
                  <NavLink onClick={handleMenu} to={path}>{link}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    </header>
  )
}

export default Header
