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
        <nav className="relative z-10 container flex mx-auto justify-center mt-5 border border-gray-500 max-w-[500px] sm:text-sm rounded-2xl h-10 py-2 bg-opacity-80 transition-all duration-300">
          <ul className="flex space-x-4 text-white font-bold">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skill"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sections */}
        <div>
          <Element name="about" className="h-screen flex items-center  justify-center">
            <h1 className="text-white">
              <About />
            </h1>
          </Element>
          <Element name="skill" className="h-screen flex  justify-center">
            <h1 className="text-white">
              <Skill />
            </h1>
          </Element>
          <Element name="services" className="h-screen flex items-center justify-center">
            <h1 className="text-white">
              <Service />
            </h1>
          </Element>
          <Element name="projects" className="h-screen flex items-center justify-center">
            <h1 className="text-white">
              <Projects />
            </h1>
          </Element>
          <Element name="experience" className="h-screen flex items-center justify-center">
            <h1 className="text-white">
              <Experience />
            </h1>
          </Element>
          <Element name="contact" className="h-screen flex items-center justify-center">
            <h1 className="text-white">
              <Contact />
            </h1>
          </Element>
        </div>
      </div>

      {/* Mobile View */}
      <div className='md:hidden block relative z-10'>
        {/* Mobile Navigation */}
         <MobileViewAbout/>
        {/* <div className='relative z-10'>
          <nav
            className='flex container mx-auto justify-center mt-5 border border-gray-500 max-w-[250px] sm:text-sm rounded-2xl h-10 py-2 bg-opacity-80'
            style={{ opacity: navOpacity }}
          >
            <ul className='flex space-x-4 text-white font-bold'>
              <li>
                <Link
                  to='/'
                  smooth={true}
                  duration={500}
                  className='cursor-pointer
                  text-white'
                >
                  <CompassCalibrationIcon />
                </Link>
              </li>
              <li>
                <Link
                  to='/skill'
                  smooth={true}
                  duration={500}
                  className='cursor-pointer
                  text-white'
                >
                  <SplitscreenIcon />
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  smooth={true}
                  duration={500}
                  className='cursor-pointer
                  text-white'
                >
                  <HomeRepairServiceIcon />
                </Link>
              </li>
              <li>
                <Link
                  to='/projects'
                  smooth={true}
                  duration={500}
                  className='cursor-pointer
                  text-white'
                >
                  <ScienceIcon />
                </Link>
              </li>
              <li>
                <Link
                  to='/experience'
                  smooth={true}
                  duration={500}
                  className='cursor-pointer
                  text-white'
                >
                  <AccountTreeIcon />
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  smooth={true}
                  duration={500}
                  className='cursor-pointer
                  text-white'
                >
                  <ContactsIcon />
                </Link>
              </li>
            </ul>
          </nav>
          <div className=''>
            <Element
              name='/'
              className='h-screen  flex items-center justify-center'
            >
              <h1 className=' text-white'><About/></h1>
            </Element>
            <Element
              name='/skill'
              className='h-screen  flex items-center justify-center'
            >
              <h1 className=' text-white'><Skill/></h1>
            </Element>
            <Element
              name='/services'
              className='h-screen  flex items-center justify-center'
            >
              <h1 className=' text-white'><Service/></h1>
            </Element>
            <Element
              name='/projects'
              className='h-screen  flex items-center justify-center'
            >
              <h1 className=' text-white'><Projects/></h1>
            </Element>
            <Element
              name='/experience'
              className='h-screen flex items-center justify-center'
            >
              <h1 className=' text-white'><Experience/></h1>
            </Element>
            <Element
              name='/contact'
              className='h-screen  flex items-center justify-center'
            >
              <h1 className=' text-white'><Contact/></h1>
            </Element>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Header
