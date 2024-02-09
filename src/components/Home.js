import React from 'react'
//import photo from './photo.jpeg'
import { SlArrowRight } from "react-icons/sl";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='pt-96 md:pt-0 flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white '>
            <div className='flex flex-col justify-center h-full'> 
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> I am a Frontend Developer </h2> 
                <p className='text-gray-100 py-4 max-w-md text-lg'> Passionate and detail-oriented Frontend Developer with 1.5 years of dedicated experience and a total of 2.5 years in the software development market. Proficient in HTML, CSS, and JavaScript with expertise in DOM manipulation, Tailwind CSS for modern styling, and React with Redux for crafting dynamic and responsive web applications. Enthusiastic about creating seamless user experiences and translating design concepts into interactive, visually appealing websites. Committed to staying abreast of the latest industry trends and technologies, I bring creativity and a collaborative spirit to every project.  </p>
            
            <div >
                <Link to="portfolio" smooth duration='200' className='m-1 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '> Portfolio <span className='group-hover:rotate-90 duration-300 ml-1' size={25} > <SlArrowRight /> </span> </Link>
            </div>
            </div>
            <div>
        {/* <img alt="mypho" className='mt-10 rounded-2xl mx-auto w-96 h-[30rem] sm:w-[35rem] ' src={photo} loading='lazy'></img> */}
        </div>
        </div>
    </div>
  )
}

export default Home