import React from 'react'
import { variable } from './Varibles'
import {AiFillTwitterCircle , AiFillLinkedin , AiFillGithub, AiFillFacebook} from "react-icons/ai";

function Header() {
  return (
    <>
        <div className='text-center p-10 lg:px-80'>
            <h1 className='text-3xl py-2 text-blue-700'>{variable.name}</h1>
            <h2>{variable.job}</h2>
            <p>{variable.description}</p>
        </div>
        <div className='flex justify-center text-3xl gap-5'>
            <a href={variable.github} target="_blank"><AiFillGithub /></a>
            <a href={variable.facebook} target="_blank"><AiFillFacebook /></a>
            <a href={variable.linkedin} target="_blank"><AiFillLinkedin /></a>
            <a href={variable.twitter} target="_blank"><AiFillTwitterCircle /></a>
        </div>
    </>
  )
}

export default Header