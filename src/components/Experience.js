import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import JavaScript from '../assets/javascript.png'

import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import reactimg from '../assets/react.png'
import node from '../assets/node.png'
import Redux from '../assets/Redux.png'

const Experience = () => {

    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactimg,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: Redux,
            title: 'Redux',
            style: 'shadow-purple-500'
        },
        {
            id: 7,
            src: graphql,
            title: 'GraphQL',
            style: 'shadow-pink-600'
        },
        {
            id: 8,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            src: node,
            title: 'Nodejs',
            style: 'shadow-green-400'
        }
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-full pt-36 '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'> Experience </p>
                <p className='py-6 text-2xl'> These are the technologies I have worked with </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    skills.map( ({id,src,title,style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='skills' className='w-20 mx-auto'></img>
                    <p className='mt-4'>{title}</p>
                </div>
                    ) )
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience