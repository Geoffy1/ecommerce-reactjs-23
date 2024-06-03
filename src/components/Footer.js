import React from 'react'
import {  BsYoutube, BsWhatsapp, BsTwitterX, BsFacebook, BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import {  Link } from 'react-router-dom'



const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
  <input type="text" className="form-control py-1" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
</div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Hno : 254716174485 Near KU Referal, <br /> K West, Nairobi <br />
                  Pincode: 100
                </address>
                <a href="tel:+254716174485" className="mt-3 d-block mb-2 text-white">+254716174485</a>
                <a href="mailto:seemewe1994@gmail.com" className="mt-2 d-block mb-2 text-white">seemewe1994@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap-30">
                  <a className='text-white' href=""><BsWhatsapp /></a>
                  <a  className='text-white' href=""><BsTwitterX /></a>
                  <a className='text-white' href=""><BsFacebook /></a>
                  <a className='text-white' href=""><BsLinkedin /></a>
                  <a className='text-white'  href=""><BsYoutube /></a>
                  <a className='text-white'  href=""><BsGithub /></a>
                  <a className='text-white'  href=""><BsInstagram /></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column '>
                <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund policy</Link>
                <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping policy</Link>
                <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy policy</Link>
                <Link to='/blogs' className='text-white py-2 mb-1'>Blogs</Link>
                <Link to='/terms-and-conditions' className='text-white py-2 mb-1'>Terms and Conditions</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column '>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Content</Link>
              </div>
            </div>
            <div className=" col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column '>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white '>&copy; {new Date().getFullYear()}; Powered by Spidy Devs Cafe</p>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  )
}

export default Footer