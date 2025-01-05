import React from 'react'
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import About from './About'
import Skill from './SkillCart'
import Service from './Services'
import Projects from './Project'
import Experience from './Experience'
import Contact from './Contact'
import MobileViewAbout from './MobileViewAbout'
const Header = () => {
  return (
    <>
    {/* Full Page Background */}
    <div className="min-h-screen bg-gradient-to-r from-[#12161b] via-[#2c3035] to-[#12161b] bg-[length:200%_200%] animate-gradient fixed inset-0 z-0"></div>
  
    {/* Desktop View */}
    <div className="hidden md:block relative z-10">
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[500px] mt-5 border border-gray-500 sm:text-sm rounded-2xl h-10 py-2 bg-opacity-80 transition-all duration-300 z-10">
        <ul className="flex space-x-4 text-white font-bold justify-center">
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer text-white">About</Link>
          </li>
          <li>
            <Link to="skill" smooth={true} duration={500} className="cursor-pointer text-white">Skill</Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer text-white">Services</Link>
          </li>
          {/* <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-white">Projects</Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer text-white">Experience</Link>
          </li> */}
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-white">Contact</Link>
          </li>
        </ul>
      </nav>
  
      {/* Sections */}
      <div>
        <Element name="about" className="flex items-center justify-center">
          <h1 className="text-white"><About /></h1>
        </Element>
        <Element name="skill" className="flex justify-center">
          <h1 className="text-white"><Skill /></h1>
        </Element>
        <Element name="services" className="flex items-center justify-center">
          <h1 className="text-white"><Service /></h1>
        </Element>
        {/* <Element name="projects" className="flex items-center justify-center">
          <h1 className="text-white"><Projects /></h1>
        </Element>
        <Element name="experience" className="flex items-center justify-center">
          <h1 className="text-white"><Experience /></h1>
        </Element> */}
        <Element name="contact" className="flex items-center justify-center">
          <h1 className="text-white"><Contact /></h1>
        </Element>
      </div>
    </div>
  
    {/* Mobile View */}
    <div className='md:hidden block relative z-10'>
      {/* Mobile Navigation */}
      <MobileViewAbout/>
    </div>
  </>
  
  )
}

export default Header
