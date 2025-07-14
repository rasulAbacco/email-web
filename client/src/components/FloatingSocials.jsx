import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaShareAlt } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import '../styles/FloatingSocials.css';

const FloatingSocials = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`floating-socials ${open ? 'open' : ''}`}>
            <button className="main-icon" onClick={() => setOpen(!open)}>
                <FaShareAlt />
            </button>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
        </div>
    );
};

export default FloatingSocials;
