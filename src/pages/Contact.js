import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { CiHome } from "react-icons/ci";
import { MdAddIcCall } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";
import { FaInfo } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title='Contact Us' />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d923.3214998806734!2d36.91181459613068!3d-1.181319267606797!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1717138376744!5m2!1sen!2ske" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">
                    Contact Us
                  </h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control"  placeholder='Name'/>
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea name="" id="" className='w-100  form-control' placeholder='Comments' cols="30" rows="5"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">
                    Talk to Us
                  </h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <CiHome className='fs-5'  />
                        <address className='mb-0'>Hno: 277 , Near Rurie village,<br /> Kahawa North, Nairobi</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <MdAddIcCall  className='fs-5' />
                      <a href="tel:+254716174485">+254716174485</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <IoIosMailUnread className='fs-5'  />
                      <a href="mailto:geojogu@gmail.com">geojogu@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaInfo className='fs-5'  />
                      <p className='mb-0'>Monday - Friday 10AM-8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact