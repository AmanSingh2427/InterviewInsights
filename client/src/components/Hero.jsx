import React, { useState } from 'react'

const Hero = () => {

  const [text,setText] = useState('');

  const getText=(text)=>{
    setText(text);
  }
  return (
    
<div className="bg-[rgb(250, 251, 255)]  overflow-hidden relative ml-[8%] mr-[8%] mt-10">
    <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black  sm:text-6xl">
            <span className="block">
                Discover a Company
            </span>
            <span className="block text-indigo-500">
                that deserves you.
            </span>
        </h2>
        <p className="text-xl mt-4 text-gray-500">
            I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
        </p>
        <div className="flex space-x-4 mt-5">
        <div className="flex border-2px solid red rounded-md overflow-hidden w-full">
          <input type="text" className="w-full pl-3 rounded-md rounded-r-none border-2" placeholder='Enter company' onChange={(e)=>getText(e.target.value)} />
          <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>
        </div>
        {/* <button className="bg-green-500 px-6 text-lg font-semibold py-4 rounded-md">Clear</button> */}
      </div>
    </div>
    <img src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/11/tab1.jpg" className="absolute bg-[rgb(250, 251, 255)] top-0 right-0 hidden h-full max-w-1/2 lg:block" alt=""/>
</div>

  )
}

export default Hero