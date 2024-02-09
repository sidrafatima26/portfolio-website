import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full pt-36  bg-gradient-to-b from-black to-gray-500 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full  '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6 text-2xl'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form method="POST" action="https://getform.io/f/3b3cebab-4b4f-46e0-a8e7-696a48e30752" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className="p-2 bg-transparent border-2 rounded-md text-white focus:outlne-none"></input>
                    <input type="email" name="email" placeholder='Enter your email' className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outlne-none"></input>
                    <textarea name="message" rows='10' placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outlne-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200'>Let's chat</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact