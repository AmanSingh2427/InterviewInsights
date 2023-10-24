import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';

const Navbar = () => {
    const {account}=useContext(DataContext);

  return (
    <>
      
<div>
    <nav className="bg-white   shadow m-auto ">
        <div className="px-8 mx-auto max-w-7xl position-fixed">
            <div className="flex items-center justify-between h-16">
                <div className="w-full justify-between flex items-center">
                    <NavLink to="/" className="flex-shrink-0" >
                        <img className="w-8 h-8" src="/icons/rocket.svg" alt="Workflow"/>
                    </NavLink>
                    <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                            <NavLink className="text-gray-800  hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" to="/">
                                Home
                            </NavLink>
                            <NavLink className="text-gray-800   hover:text-gray-900  px-3 py-2 rounded-md text-sm font-medium"to="/details">
                                Details
                            </NavLink>
                            <NavLink className="text-gray-800  hover:text-gray-900  px-3 py-2 rounded-md text-sm font-medium" to="/">
                                Content
                            </NavLink>
                            <NavLink className="text-gray-800  hover:text-gray-900  px-3 py-2 rounded-md text-sm font-medium" to="/">
                                Contact
                            </NavLink>
                            
                              {
                                account?<p>Welcome {account}</p>
                                :
                                <button type="button" className="py-1 px-2  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <NavLink to='/login'>Login</NavLink>
                              </button>
                              }

                              
                                {/* <button type="button" className="py-1 px-2 border-indigo-700 hover:bg-indigo-600 hover:text-white  focus:ring-offset-indigo-200 text-indigo-600 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <NavLink to='/login'>Login</NavLink>
                                </button> */}


                              
                            <button type="button" className="py-1 px-2  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                                <NavLink to='/contribute'>Contribute</NavLink>
                            </button>


                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="flex items-center ml-4 md:ml-6">
                    </div>
                </div>
                <div className="flex -mr-2 md:hidden">
                    <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a className="text-gray-700 hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium" href="/">
                    Home
                </a>
                <a className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Gallery
                </a>
                <a className="text-gray-700 hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium" href="/">
                    Content
                </a>
                <a className="text-gray-700 hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium" href="/">
                    Contact
                </a>
            </div>
        </div>
    </nav>
  
</div>

    </>
  )
}

export default Navbar
