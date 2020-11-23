import React, { useState } from "react"
import { Link } from "gatsby"
interface MobileSideBarProps {
  isOpen: boolean
}

const activeStyles = {
  color: "gray",
}

const MobileSideBar = ({ isOpen }: MobileSideBarProps) => {
  const isOpenStyle = isOpen ? "translate-x-0" : "-translate-x-full"
  return (
    <aside
      className={`p-10 flex items-center transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isOpenStyle}`}
    >
      <div className="flex flex-col">
        <Link
          to="/"
          className="block text-black hover:text-gray-400 font-medium text-3xl uppercase py-1"
          activeStyle={activeStyles}
        >
          HomePage
        </Link>
        <Link
          to="/about"
          className="block text-black hover:text-gray-400 font-medium text-3xl uppercase py-1"
          activeStyle={activeStyles}
        >
          About
        </Link>
        <Link
          to="/blog"
          className="block text-black hover:text-gray-400 font-medium text-3xl uppercase py-1"
          activeStyle={activeStyles}
        >
          Blog
        </Link>
        <Link
          to="/latest-work"
          className="block text-black hover:text-gray-400 font-medium text-3xl uppercase py-1"
          activeStyle={activeStyles}
        >
          Latest Work
        </Link>
      </div>
    </aside>
  )
}

const DesktopSideBar = () => {}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIcon = isOpen ? (
    <svg viewBox="0 0 352 512" className="h-5 w-5 cross">
      <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
    </svg>
  ) : (
    <svg viewBox="0 0 448 512" className="h-5 w-5 hamburger">
      <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
    </svg>
  )
  return (
    <header className="bg-white dark:bg-black">
      <MobileSideBar isOpen={isOpen} />
      <div className="flex items-center justify-between px-6 py-3">
        <h1>OM</h1>
        <div className="hidden md:block">
          <Link to="/" className="mx-4" activeClassName="active-link">
            HOMEPAGE
          </Link>
          <Link to="/about" className="mx-4" activeClassName="active-link">
            ABOUT
          </Link>
          <Link
            to="/latest-work"
            className="mx-4"
            activeClassName="active-link"
          >
            LATEST WORK
          </Link>
        </div>
        <button
          type="button"
          className="block md:hidden text-black hover:text-gray-500 focus:text-gray-500 focus:outline-none z-30"
          onClick={() => setIsOpen(!isOpen)}
        >
          {toggleIcon}
        </button>
      </div>
    </header>
  )
}
