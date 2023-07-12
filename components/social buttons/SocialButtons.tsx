import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const SocialButtons = () => {
    return (
        <div className='hidden text-white fixed left-0 top-1/2 transform -translate-y-1/2 md:flex flex-col z-50 '>
            <button className='m-2 hover:scale-110 opacity-70 hover:opacity-100'><FaFacebookF size={30} /></button>
            <button className='m-2 hover:scale-110 opacity-70 hover:opacity-100'><FaTwitter size={30} /></button>
            <button className='m-2 hover:scale-110 opacity-70 hover:opacity-100'><FaInstagram size={30} /></button>
            <button className='m-2 hover:scale-110 opacity-70 hover:opacity-100'><FaLinkedinIn size={30} /></button>
            <button className='m-2 hover:scale-110 opacity-70 hover:opacity-100'><FaYoutube size={30} /></button>
        </div>
    );
};

export default SocialButtons;
