import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Experience from './components/Experience'
// import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
import Services from './components/Services'
import SkillCart from './components/SkillCart'
// import Testimonials from './data/Testimonials'
function App () {
  return (
    <div className=''>
      <Header/>
      {/* <Testimonials/> */}
      <div className='mt-[4rem] z-10 relative'>
        <Routes>
          {/* <Route path='/' element={<About />} /> */}
        <Route path='/services' element={<Services />} />
          <Route path='/skill' element={<SkillCart />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
