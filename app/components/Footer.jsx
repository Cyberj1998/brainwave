import React from 'react'
import Section from './Section'
import { socials } from '../constants'
import Image from 'next/image'

const Footer = () => {
  return (
    <Section crosses className='!px-0 !py-10'>
      <div className='container flex sm:justify-between justify-center items-center ga-10 max-sm:flex-col'>
        <p className='caption text-n-4 lg:block'>{new Date().getFullYear()} All rights reserved.</p>
      
        <ul className='flex gap-5 flex-wrap'>
          {socials.map((social)=>(
            <a key={social.id} className='flex items.center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6'>
              <Image 
                src={social.iconUrl}
                width={16}
                height={16}
                alt={social.title}
              />   
            </a>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer
