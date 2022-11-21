import React from 'react'
import { variable } from './Varibles'
import {AiFillTwitterCircle , AiFillLinkedin , AiFillGithub, AiFillFacebook} from "react-icons/ai";

function Header() {
  return (
    <>
        <div className='text-center p-10'>
            <h1 className='text-3xl py-2 text-blue-700'>{variable.name}</h1>
            <h2>{variable.job}</h2>
            <p>{variable.description}</p>
        </div>
        <div className='flex justify-center text-3xl gap-5'>
            <a href={variable.github}><AiFillGithub /></a>
            <a href={variable.facebook}><AiFillFacebook /></a>
            <a href={variable.linkedin}><AiFillLinkedin /></a>
            <a href={variable.twitter}><AiFillTwitterCircle /></a>
        </div>
    </>
  )
}

export default Header