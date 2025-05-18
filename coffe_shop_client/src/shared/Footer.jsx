import React from 'react'
import { FaFacebook, FaLinkedin, FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { MdCall, MdEmail, MdLocationPin } from 'react-icons/md'

export default function Footer() {
  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log(formData.entries())
  }

  return (
    <>
      <div className='grid grid-cols-2 px-[12vw] pt-[5vw] pb-5 bg-[url(/more/13.jpg)] gap-[15vw]'>
        <div>
          <img src="/coffe_shop_client/public/more/logo1.png" alt="" />
          <h1>Espresso Emporium</h1>
          <p className='mb-6'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
          <div className='flex gap-4 text-[2vw]'>
            <a href="https://facebook.com" target='_blank'><FaFacebook /></a>
            <a href="https://x.com" target='_blank'><FaSquareTwitter /></a>
            <a href="https://linkedin.com" target='_blank'><FaLinkedin /></a>
            <a href="https://instagram.com" target='_blank'><FaSquareInstagram /></a>
          </div>
          <h1 className='my-5'>Get in Touch</h1>
          <div className='flex flex-col gap-4 text-lg'>
            <p className='flex items-center gap-2'><MdCall /> +88 01533 333 333</p>
            <p className='flex items-center gap-2'><MdEmail /> info@gmail.com</p>
            <p className='flex items-center gap-2'><MdLocationPin /> 72, Wall street, King Road, Dhaka</p>
          </div>
        </div>

        <div className='w-full'>
          <h1 className='mb-4'>Connect with Us</h1>
          <form action="" className="flex flex-col gap-5 w-fit" onSubmit={handleSendMessage}>
            <input type="text" name="text" placeholder="Name" className="bg-white rounded-md border-none px-4 py-2 shadow-sm focus:outline-none w-100" />

            <input type="email" name="email" placeholder="Email" className="bg-white rounded-md border-none px-4 py-2 shadow-sm focus:outline-none w-100" />

            <textarea type="text" name="message" placeholder="Message" className="bg-white rounded-md border-none px-4 py-2 shadow-sm focus:outline-none w-100 resize-none" />

            <h1>
              <input type="submit" value="Send Message" className="text-brown-800 border border-brown-800 bg-transparent px-6 py-1 rounded-4xl cursor-pointer text-lg font-semibold hover:bg-brown-100 transition" />
            </h1>
          </form>

        </div>
      </div>
      <div className='bg-[url("/more/24.jpg")] w-full'>
        <h1 className='!text-white !text-lg text-center py-1 !font-normal opacity-90'>Copyright Espresso Emporium ! All Rights Reserved</h1>
      </div>
    </>
  )
}
