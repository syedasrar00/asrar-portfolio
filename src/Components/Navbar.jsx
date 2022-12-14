import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {RiSunLine} from 'react-icons/ri'
export default function Navbar() {
  return (
    <div className='py-2 mb-8 mx-4 flex justify-between'>
        <h1 className = "text-xl font-sans font-bold">SYED ASRAR</h1>
        <ul className="flex items-center gap-5">
            <li><BsFillMoonStarsFill className="cursor-pointer text-l " /><RiSunLine className='hidden' /></li>
            <li><a className="bg-gradient-to-l from-black to-gray-400 text-white px-2 py-1 rounded-md ml-1" href="#">Resume</a></li>
        </ul>
    </div>
  )
}
