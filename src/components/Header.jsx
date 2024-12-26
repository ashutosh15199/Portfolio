import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactsIcon from '@mui/icons-material/Contacts';
import ScienceIcon from '@mui/icons-material/Science';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import { Outlet } from 'react-router-dom';

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY); // Get the vertical scroll position
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity based on scroll position
  const navOpacity = Math.min(1, scroll / 300) || 1;

  return (
    <>
      {/* Full Page Background */}
      <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 fixed inset-0 z-0"></div>

      {/* Desktop View */}
      <div className="hidden md:block relative z-10">
        {/* Desktop Navigation */}
        <div className="relative z-10">
          <nav
            className="container flex mx-auto justify-center mt-5 border border-gray-500 max-w-[500px] sm:text-sm rounded-2xl h-10 py-2 bg-opacity-80 transition-all duration-300"
            style={{ opacity: navOpacity }}
          >
            <ul className="flex space-x-4 text-white font-bold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'text-white bg-green-800 px-2 py-1 rounded-lg' : 'hover:text-green-800 hover:bg-opacity-60 transition-all px-2 py-1 rounded-lg'
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skill"
                  className={({ isActive }) =>
                    isActive ? 'text-white bg-green-800 px-2 py-1 rounded-lg' : 'hover:text-green-800 hover:bg-opacity-60 transition-all px-2 py-1 rounded-lg'
                  }
                >
                  Skill
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? 'text-white bg-green-800 px-2 py-1 rounded-lg' : 'hover:text-green-800 hover:bg-opacity-60 transition-all px-2 py-1 rounded-lg'
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? 'text-white bg-green-800 px-2 py-1 rounded-lg' : 'hover:text-green-800 hover:bg-opacity-60 transition-all px-2 py-1 rounded-lg'
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  className={({ isActive }) =>
                    isActive ? 'text-white bg-green-800 px-2 py-1 rounded-lg' : 'hover:text-green-800 hover:bg-opacity-60 transition-all px-2 py-1 rounded-lg'
                  }
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'text-white bg-green-800 px-2 py-1 rounded-lg' : 'hover:text-green-800 hover:bg-opacity-60 transition-all px-2 py-1 rounded-lg'
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden block relative z-10">
        {/* Mobile Navigation */}
        

        <div className="relative z-10">
          <nav
            className="flex container mx-auto justify-center mt-5 border border-gray-500 max-w-[250px] sm:text-sm rounded-2xl h-10 py-2 bg-opacity-80"
            style={{ opacity: navOpacity }}
          >
            <ul className="flex space-x-4 text-white font-bold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-green-800')}
                >
                  <CompassCalibrationIcon />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skill"
                  className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-green-800')}
                >
                  <SplitscreenIcon />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-green-800')}
                >
                  <HomeRepairServiceIcon />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-green-800')}
                >
                  <ScienceIcon />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-green-800')}
                >
                  <AccountTreeIcon />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-green-800')}
                >
                  <ContactsIcon />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
