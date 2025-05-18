import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router'

export default function ErrorPage() {
  return (
    <>
      <div className='grid justify-center'>
        <Link to="/" className='justify-self-center'><h1 className='flex items-center gap-3 !text-2xl my-5'><FaArrowLeft /> Back to home</h1></Link>
        <img src="/404/404.gif" alt="" />
      </div>
    </>
  )
}
