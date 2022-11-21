import React from 'react'
import { variable } from './Varibles'

export default function SkillstoOffer() {
  return (
    <div className='mx-4'>
        <h2 className='text-3xl py-2 text-blue-900 font-serif'>Services I offer</h2>
        <p className='text-md py-2 text-gray-800'>{variable.serviceDescription}</p>
        <p className='text-md py-2 text-gray-800'>{variable.moreServiceDescription}</p>
    </div>
  )
}
