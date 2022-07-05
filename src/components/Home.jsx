import React from 'react'
import {SiInstagram,SiGithub,SiLinkedin} from 'react-icons/si'
import Typewriter from 'typewriter-effect';
import resume from '../assets/ALTAMASHSAYYED.docx'
import Contact from './Contact';
import {Link} from 'react-router-dom'
 const Home = () => {
  return (
      <>
      <div className='flex mt-8 mr-16'>
      {/* <Sidebar /> */}
      <div className='home sm:ml-60 text-center p-8 text-white sm:w-96 w-80 md:text-3xl font-mono my-8 sm:my-28 font-bold  h-full'>
    <div>
      <h2 className='text-3xl text-lime-300'>Hi, I am</h2>
        <h2 className='text-3xl text-white'>ALTAMASH SAYYED</h2>
        <h2 className='text-2xl text-lime-300'>
        
          <Typewriter
  options={{
    strings: ['Full-Stack Engineer', 'Frontend Engineer','React','React Native','Tailwind Css','TypeScript','Node.js','Express.js','JavaScript','Python'],
    autoStart: true,
    loop: true,
  }}
/>
        
        </h2>
    <div className='flex ml-5 m-3 p-3'>
   <a target='_blank' href='https://www.instagram.com/mr.altamash_sayyed/' > <p  className='m-3 p-2  hover:scale-105'><SiInstagram /></p></a>
   <a target='_blank' href='https://github.com/Altamash-Sayyed' > <p className='m-3 p-2 hover:scale-105'><SiGithub /></p></a>
   <a target='_blank' href='https://www.linkedin.com/in/altamash-sayyed-bb2323223/' > <p  className='m-3 p-2  hover:scale-105'><SiLinkedin /></p></a>
    </div>
    <div>
     <a target='_blank' href={resume}> <button className='text-xl m-4 border-2 border-lime-300 hover:bg-lime-300 hover:scale-105 p-2 rounded-xl hover:text-black'>Get Resume</button></a>
   <Link to='/contact'>   <button className='text-xl m-4 border-2 border-lime-300 hover:bg-lime-300 hover:scale-105 p-2 rounded-xl hover:text-black'>Hire Me</button></Link>
    </div>
    </div>
      </div> 
      </div>
    </>
  )
}

export default Home
