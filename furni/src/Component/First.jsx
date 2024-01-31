import React from 'react'

const First = () => {
  return (
    <div className='bg-white sm:py-48 lg:py-56 p-7'>
      <div className='flex flex-wrap justify-center'>

        <div className="xl:w-[30%] lg:w-[40%] md:w-[100%] p-5">
          
            <h1 className="text-xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mt-10">
            Crafted with excellent material.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            </div>
            <div className='md:flex justify-center items-center md:flex-nowrap sm:flex-wrap xs:flex-wrap xl:w-[70%] lg:w-[60%] md:w-[100%]'>

            <div className="flex flex-col justify-center items-center">
                <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                <p className='text-lg font-semibold'>Nordic Chair</p>
                <p className='font-bold'>$50.00</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://themewagon.github.io/furni/images/product-2.png" alt="" />
                <p className='text-lg font-semibold'>Kruzo Aero Chair</p>
                <p className='font-bold'>$78.00</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://themewagon.github.io/furni/images/product-3.png" alt="" />
                <p className='text-lg font-semibold'>Ergonomic Chair</p>
                <p className='font-bold'>$43.00</p>
            </div>
            </div>
      </div>

    </div>
  )
}

export default First