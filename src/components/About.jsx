import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { SiGooglemaps, SiGmail } from 'react-icons/si'
import resume from '../assets/ALTAMASHSAYYED.docx'


const About = () => {
  return (
    <center>
      <div>
        <div className='h-80 text-white md:w-2/1 text-3xl m-4 md:m-20'>
          <p className='text-lime-300'>ABOUT ME</p><br />
          <p className='text-xl md:w-1/2 h-32 mr-3 text-center md:h-40'>HI I am Altamash  and passionate about all things javascript. I work hard. I care about writing clean code and genuinely love to team. I am currently looking about right opportunity to work in an envoirment that will help me progress in full-stack role.</p>
          <br className='block sm:hidden' />
          <br className='block sm:hidden' />
          <br className='block sm:hidden' />
          <br className='block sm:hidden' />
          <a target='_blank' rel="noreferrer" href={resume}> <button className='text-xl m-4 border-2 border-lime-300 hover:bg-lime-300 hover:scale-105 p-2 rounded-xl hover:text-black'>Get Resume</button></a>

        </div>
      </div>
      <div className='sm:text-3xl  text-white'>
        <center className='flex flex-col'>
          <br className='sm:hidden' />
          <br className='sm:hidden' />
          <br className='sm:hidden' />

          <p className='flex m-2'><SiGooglemaps />&nbsp;Akkalkot,Solapur,Maharashtra</p>
          <p className='flex m-2'><BiPhone />&nbsp; +91 9284043295</p>
          <p className='flex m-2'><SiGmail />&nbsp;altamashsayyed023@gmail.com</p>

        </center>
      </div>
    </center>
  )
}

export default About
