import React from 'react'
import { FaWhatsapp} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
            <p>© All Rights Reserved 2025.</p>

            <div className='flex items-center gap-4 justify-center text-2xl'>
                <a href= 'https://wa.me/919430417562'  target='_blank' className='hover:text-primary-100'>
                    <FaWhatsapp/>
                </a>
                <a href='https://instagram.com/anand_3125_2022'  target='_blank' className='hover:text-primary-100'>
                    <FaInstagram/>
                </a>
                <a href='https://linkedin.com/in/georgian3125anand'  target='_blank' className='hover:text-primary-100'>
                    <FaLinkedin/>
                </a>
            </div>
        </div> 
    </footer>
  )
}

export default Footer
