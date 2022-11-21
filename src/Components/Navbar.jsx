import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {RiSunLine} from 'react-icons/ri'
export default function Navbar() {
  return (
    <div  className='py-5 mb-12 mx-10 flex justify-between'>
        <h1 className = "text-xl font-serif" >Syed Asrar</h1>
        <ul className="flex items-center gap-5">
            <li><BsFillMoonStarsFill classname="cursor-pointer text-slate-300 " /><RiSunLine className='hidden' /></li>
            <li><a className="bg-gradient-to-l from-cyan-600 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
        </ul>
    </div>
  )
}
