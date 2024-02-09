import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links =[
        {
            id: 1,
            child: ( <> Linkedin <FaLinkedin size={30} /> </> ),
            href: '#',
            style: 'rounded-tr-md bg-slate-500',
        },
        {
            id: 2,
            child: ( <> Github <FaGithub size={30} /> </> ),
            href: '#',
            style: 'rounded-br-md bg-slate-500',
        },
        {
            id: 3,
            child: ( <> Email <HiOutlineMail size={30} /> </> ),
            href: 'mailto:xyzabc@gmail.com',
            style: 'rounded-br-md bg-slate-500',
        },
        {
            id: 4,
            child: ( <> Resume <BsFillPersonLinesFill size={30} /> </> ),
            href: '#',
            style: 'rounded-br-md bg-slate-500',
            download: true
        },
    ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            {
                links.map( ({id,child, href, style, download}) => ( <li key={id} className={'hover:rounded-md hover:ml-[-10px] duration-200 ml-[-100px] flex justify-between items-center w-40 h-14 px-4 bg-gray-500' + style} > <a alt="social" href={href} className=' flex justify-between items-center w-full text-white text-xl text-extrabold' download={download} target='_blank' rel='noreferrer'> {child} </a> </li>
                ) )
            }
        </ul>
    </div>
  )
}

export default SocialLinks