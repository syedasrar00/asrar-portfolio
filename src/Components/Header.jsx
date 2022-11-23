import React from 'react'
import { variable } from './Varibles'
import Avatar from "./Avatar"
import {AiFillTwitterCircle , AiFillLinkedin , AiFillGithub, AiFillFacebook} from "react-icons/ai";

function Header() {
  return (
    <><Avatar />
    <div className='text-center lg:px-80'> 
        <h1 className='text-3xl py-2 text-transparent bg-gradient-to-r from-green-900 to-cyan-300 bg-clip-text'>{variable.name}</h1>
        <h2>{variable.job}</h2>
        <p>{variable.description}</p>
        <div className='my-5 flex justify-center text-3xl gap-10'>
            <a href={variable.github} target="_blank"><AiFillGithub /></a>
            <a href={variable.facebook} target="_blank"><AiFillFacebook /></a>
            <a href={variable.linkedin} target="_blank"><AiFillLinkedin /></a>
            <a href={variable.twitter} target="_blank"><AiFillTwitterCircle /></a>
        </div>
    </div>
    </>
  )
}

export default Header