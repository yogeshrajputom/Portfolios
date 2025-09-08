import { useState } from 'react'
import React from "react";
import Navbar from './Components/Navbar/navbar'
import Abouts from './Components/Abouts/abouts'
import Skills from './Components/Skills/skills'
import Contact from './Components/Contact/contact'
import Education from './Components/Education/education'
import Experience from './Components/Experience/experience'
import Footer from './Components/Footer/footer'
import Project from './Components/Project/project'
import BlorBlob from './BlorBlob';
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="bg-gray-800">

        <BlorBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        </div>

        <div className='relative pt-20'>
          <Navbar />
          <Abouts />
          <Skills />
          {/* <Experience /> */}
          <Project />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
