import React from 'react'
import person from '../assets/img-avatar.png'


export default function Avatar() {
  return (
      <div className='flex justify-center my-6 m-4'>
          <img src={person} className=' bg-gradient-to-b from-blue-500 to-slate-400 rounded-full'/>
      </div>
  )
}
