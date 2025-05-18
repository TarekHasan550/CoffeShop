import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ backgroundImage: 'url("/more/15.jpg")', backgroundSize: 'cover' }} className='w-full h-16 text-white'>
      <div className='flex items-center justify-center gap-3 h-full px-4'>
        <img src="/more/logo1.png" alt="" className='w-10' />
        <h2 className='text-2xl font-bold'>Espresso Emporium</h2>
      </div>
    </nav>
  );
}
