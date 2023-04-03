import Image from 'next/image';
import React from 'react';

function Avatar() {
  return (
    <Image 
      alt='Avatar'
      className='rounded-full'
      width={30}
      height={30}
      src={'/images/placeholder.jpg'}
    />
  )
}

export default Avatar