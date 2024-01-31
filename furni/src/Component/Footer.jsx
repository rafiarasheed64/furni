import React from 'react'

const Footer = () => {
  return (
    <div className='p-10'>
        <div className='flex flex-wrap justify-around items-center'>
            <div>
                <p className='text-lg'>Subscribe to Newsletter</p>
                <div className='spacing-3'>
                <input type="text" class="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500" placeholder="Enter your name"/>
                <input type="text" class="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500" placeholder="Enter your email"/>
                <button class="bg-[rgb(59,93,80)] opacity-[100%] hover:opacity-[90%] text-white font-bold py-2 px-4 rounded"><i class="bi bi-send-fill"></i></button>
                </div>
            </div>
            <img className='h-56 lg:mt-[-50px] md:mt-[20px]' src="https://themewagon.github.io/furni/images/sofa.png" alt="" />

        </div>




        <div className='flex flex-wrap justify-between border-b-2 border-gray-500 py-10'>
            <div className='md:w-[30%] sm:w-[80%]'>
                <h2 className='text-2xl font-bold text-[rgb(59,93,80)]'>Furni.</h2>
                <p className='text-sm mt-2'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                <div className='w-[30%] flex justify-between mt-3'>
                <i class="bi bi-facebook text-[rgb(59,93,80)]"></i>
                <i class="bi bi-twitter text-[rgb(59,93,80)]"></i>
                <i class="bi bi-instagram text-[rgb(59,93,80)]"></i>
                <i class="bi bi-linkedin text-[rgb(59,93,80)]"></i>
                </div>
            </div>
            
                <ul className='md:w-[10%] sm:w-[80%] w-[100%] mt-3'>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>About us</li>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Services</li>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Blog</li>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Contact us</li>
                </ul >
            
           
                <ul className='md:w-[10%] sm:w-[80%] w-[100%] mt-3'>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Support</li>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Knowledge base</li>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Live chat</li>
                </ul>
            
        
                <ul className='md:w-[10%] sm:w-[80%] w-[100%] mt-3'>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Jobs</li>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Our team</li>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Leadership</li>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Privacy Policy</li>
                </ul>
            

                <ul className='md:w-[10%] sm:w-[80%] w-[100%] mt-3'>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Nordic Chair</li>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Kruzo Aero</li>
                    <li className='opacity-[100%] hover:opacity-[75%]  cursor-pointer mt-2'>Ergonomic Chair</li>
                </ul>
            
        </div>

        <p className='mt-5 text-sm'>Copyright ©2023. All Rights Reserved. — Designed with love by Untree.co Distributed By ThemeWagon</p>
    </div>
  )
}

export default Footer