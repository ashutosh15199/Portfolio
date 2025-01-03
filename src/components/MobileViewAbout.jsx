import React from 'react'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import ContactsIcon from '@mui/icons-material/Contacts'
import ScienceIcon from '@mui/icons-material/Science'
import SplitscreenIcon from '@mui/icons-material/Splitscreen'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration'
import { Outlet } from 'react-router-dom'
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import About from './About'
import Skill from './SkillCart'
import Service from './Services'
import Projects from './Project'
import Experience from './Experience'
// import contact from './Contact'
import Contact from './Contact'
const MobileViewAbout = () => {
  return (
    <div className='relative z-10'>
    <nav className='fixed sm:relative top-0 left-0 w-full sm:w-auto mx-[60px] flex justify-center items-center mt-5 border border-gray-500 max-w-[250px] sm:text-sm rounded-2xl h-10 py-2 bg-opacity-80'>
      <ul className='flex space-x-4 text-white font-bold'>
        <li>
          <Link
            to='/'
            smooth={true}
            duration={500}
            className='cursor-pointer text-white'
          >
            <CompassCalibrationIcon />
          </Link>
        </li>
        <li>
          <Link
            to='/skill'
            smooth={true}
            duration={500}
            className='cursor-pointer text-white'
          >
            <SplitscreenIcon />
          </Link>
        </li>
        <li>
          <Link
            to='/services'
            smooth={true}
            duration={500}
            className='cursor-pointer text-white'
          >
            <HomeRepairServiceIcon />
          </Link>
        </li>
        <li>
          <Link
            to='/projects'
            smooth={true}
            duration={500}
            className='cursor-pointer text-white'
          >
            <ScienceIcon />
          </Link>
        </li>
        <li>
          <Link
            to='/experience'
            smooth={true}
            duration={500}
            className='cursor-pointer text-white'
          >
            <AccountTreeIcon />
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            smooth={true}
            duration={500}
            className='cursor-pointer text-white'
          >
            <ContactsIcon />
          </Link>
        </li>
      </ul>
    </nav>
  
    <div className=''>
      <Element name='/' className=' flex items-center justify-center'>
        <h1 className='text-white'><About/></h1>
      </Element>
      <Element name='/skill' className=' flex items-center justify-center'>
        <h1 className='text-white'><Skill/></h1>
      </Element>
      <Element name='/services' className=' flex items-center justify-center'>
        <h1 className='text-white'><Service/></h1>
      </Element>
      <Element name='/projects' className='flex items-center justify-center'>
        <h1 className='text-white'><Projects/></h1>
      </Element>
      <Element name='/experience' className='flex items-center justify-center'>
        <h1 className='text-white'><Experience/></h1>
      </Element>
      <Element name='/contact' className='flex items-center justify-center'>
        <h1 className='text-white'><Contact/></h1>
      </Element>
    </div>
  </div>
  
  
  )
}

export default MobileViewAbout;