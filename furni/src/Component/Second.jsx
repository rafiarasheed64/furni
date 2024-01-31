import React from 'react'

const Second = () => {
  return (
    <div className='bg-white flex justify-around flex-wrap sm:py-48 lg:py-20 p-7'>
        <div className='lg:w-[50%] md:w-[80%] p-10'>
            <p className='font-semibold text-4xl'>Why Choose Us</p>
            <p className='mt-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <div className='flex flex-wrap'>

            <div className='md:w-[50%] sm:w-[100%] mt-5 p-5'>
            <img src="https://themewagon.github.io/furni/images/truck.svg" alt="" />
            <p>Fast & Free Shipping</p>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            <div className='md:w-[50%] sm:w-[100%] mt-5 p-5'>
            <img src="https://themewagon.github.io/furni/images/bag.svg" alt="" />
            <p>Easy to Shop</p>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            <div className='md:w-[50%] sm:w-[100%] mt-5 p-5'>
            <img src="https://themewagon.github.io/furni/images/support.svg" alt="" />
            <p>24/7 Support</p>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            <div className='md:w-[50%] sm:w-[100%] mt-5 p-5'>
            <img src="https://themewagon.github.io/furni/images/return.svg" alt="" />
            <p>Hassle Free Returns</p>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            </div>
            </div>
            <div className='lg:w-[35%] md:w-[70%]'>
              <img className='h-[100%] w-[100%] rounded-xl' src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg" alt="" />
            </div>
            </div>
        
  )
}

export default Second