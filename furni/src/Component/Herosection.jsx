import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[rgb(59,93,80)]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <p className='text-white text-3xl font-bold'>Furni.</p>
          </div>
          <div className="flex lg:hidden ">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            <ul className='flex space-x-12 font-semibold text-lg text-white'>
              <li>Home
                <div className="bg-[#ebeb32] h-[3px] w-[100%]"></div>
              </li>
              <li className='group opacity-[50%] cursor-pointer hover:opacity-100'>Shop
              <div className="bg-[#ebeb32] h-[3px] w-[0%] duration-300 group-hover:w-[100%]"></div>
              </li>
              <li className='group opacity-[50%] hover:opacity-100'>About Us
              <div className="bg-[#ebeb32] h-[3px] w-[0%] duration-300 group-hover:w-[100%]"></div>
              </li>
              <li className='group opacity-[50%] hover:opacity-100'>Services
              <div className="bg-[#ebeb32] h-[3px] w-[0%] duration-300 group-hover:w-[100%]"></div>
              </li>
              <li className='group opacity-[50%] hover:opacity-100'>Blog
              <div className="bg-[#ebeb32] h-[3px] w-[0%] duration-300 group-hover:w-[100%]"></div>
              </li>
              <li className='group opacity-[50%] hover:opacity-100'>Contact Us
              <div className="bg-[#ebeb32] h-[3px] w-[0%] duration-300 group-hover:w-[100%]"></div>
              </li>

            </ul>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-10">
            <img src="https://themewagon.github.io/furni/images/user.svg" alt="" />
            <img src="https://themewagon.github.io/furni/images/cart.svg" alt="" />
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 " />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-[rgb(59,93,80)]">
            <div className="flex items-center justify-between bg-[rgb(59,93,80)]">
            <p className='text-white text-3xl font-bold'>Furni.</p>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <ul className='font-semibold text-lg text-white'>
              <li>Home</li>
              <li className='opacity-[50%] hover:opacity-100'>Shop</li>
              <li className='opacity-[50%] hover:opacity-100'>About Us</li>
              <li className='opacity-[50%] hover:opacity-100'>Services</li>
              <li className='opacity-[50%] hover:opacity-100'>Blog</li>
              <li className='opacity-[50%] hover:opacity-100'>Contact Us</li>

            </ul>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
{/* 
      <div className="relative isolate px-6 pt-14 lg:px-8 border border-black">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        <div className='flex flex-wrap justify-between items-center border border-black'>

        <div className="max-w-2xl py-32 sm:py-48 lg:py-50 lg:w-[50%] md:w-[100%]" >
          <div className=" text-white p-7">
            <h1 className="text-lg font-bold sm:text-6xl">
            Modern Interior Design Studio
            </h1>
            <p className="mt-6 text-md text-[rgb(151,174,162)] leading-8">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="mt-10 flex gap-x-6">
              <a
                href="#"
                className="rounded-full bg-[rgb(249,191,41)] px-4 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                Shop Now
              </a>
              <a href="#" className="text-sm font-semibold rounded-full border px-4 py-2.5 text-white opacity-60 hover:opacity-100">
                Explore
              </a>
            </div>
          </div>
        </div>
        <div className='xl:w-[50%] lg:w-[50%] xl:mt-[12%] lg:mt-[15%] md:mt-[0%]'>
          <img className='h-auto w-auto' src="https://themewagon.github.io/furni/images/couch.png" alt="" />
        </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
          >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    // </div>
  )
}



