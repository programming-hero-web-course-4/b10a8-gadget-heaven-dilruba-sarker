import React from 'react';

const Footer = () => {
    return (
        <div className='w-5xl  mx-auto  text-center mt-10 mb-10 bg-gray-200'>
         <h1 className='text-2xl font-bold flex justify-center items-center'>Gadget Heaven</h1>
         <p className=' flex justify-center items-center mb-10'>Leading the way in cutting-edge technology and innovation.</p>
         <footer className="footer flex justify-center gap-72 ">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;