import React from 'react'
import netflix from '../assets/netflix.png'
import chat from '../assets/chat.png'
import news from '../assets/news.png'
const Projects = () => {

    const project =[
        {
            name:"NETFLIX Clone",
            desc:"This Website UI clone of Netflix Web.This Website is Build in React.js with TMDB API .",
            imglink:netflix,
            link:"https://golden-liger-7f51c2.netlify.app/",
            git:"https://github.com/Altamash-Sayyed/netflix-clone"
        },
        {
            name:"Chat App",
            desc:"Chat App is Build in Node.js and Expressjs with the help of javascript real-time library Socket.io. ",
            imglink:chat,
            link:"https://wassup-live-chat-by-as.herokuapp.com/",
            git:"https://github.com/Altamash-Sayyed/Group-Chat-App-"
        },
        {
            name:"Live Weather App",
            desc:"Live Weather App is build using React.js and the open Weather Map API this web is shows the real-time Weather in world and every city.",
            imglink:news,
            link:"https://live-weather-by-altamash-sayyed.netlify.app/",
            git:""
        }
       
    ]



    
const prjct = project.map((item,index)=>{
    return(
 <div key={index} className="max-w-sm m-3 bg-black  rounded-lg border border-gray-200 shadow-md  dark:--700">
    <>
        <img className="rounded-t-lg m-1" src={item.imglink} alt="" />
    </>
    <div className="p-5">
         
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-300 dark:text-white">{item.name}</h5>
        
        <p className="mb-3 font-normal text-lime-300 ">{item.desc}</p>
        <a target="_blank" rel="noreferrer" className='p-2 border-2 border-lime-300 rounded-xl hover:bg-lime-300 m-2 text-lg text-white hover:text-black' href={item.link}>view</a>
        <br className='sm:hidden' />
        <br className='sm:hidden' />
        <a target="_blank" rel="noreferrer" className='p-2 border-2 border-lime-300 rounded-xl hover:bg-lime-300 m-2 text-lg text-white hover:text-black' href={item.git}>code</a>
    </div>
</div>
  )  })
    


  return (
    <div className='grid grid-cols-2 md:grid-cols-4  gap-4'>
      {
          prjct
      }
    </div>
  )
}

export default Projects
