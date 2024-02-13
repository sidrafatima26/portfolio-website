import React from 'react'
import Razorpay from '../assets/Razorpay.png'
import Discord from '../assets/Discord.png'
import Blogs from '../assets/BlogsWebsite.png'
import RanGif from '../assets/RanGif.png'
import Share from '../assets/ShareModal.png'
import RPG from '../assets/RPG.png'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Razorpay
        },
        {
            id: 2,
            src: Discord
        },
        {
            id: 3,
            src: Blogs
        },
        {
            id: 4,
            src: RanGif
        },
        {
            id: 5,
            src: Share
        },
        {
            id: 6,
            src: RPG
        },   
    ]

  return (

    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-full pt-36 '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6 text-2xl'>Checkout some of my work here</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
            portfolios.map( ({id,src}) => 
            
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'> <img src={src} alt="projects" className='rounded-md duration-200 hover:scale-105'></img> 
            <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
            </div>
              )
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio