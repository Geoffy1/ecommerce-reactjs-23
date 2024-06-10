import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
import blog from '../images/blog-1.jpg'

const Singleblog = () => {
  return (
    <>
      <Meta title={"Single blog name"} />
      <BreadCrumb title='Single blog name' />
      <div className="blog-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
         
          <div className="col-12">
            <div className="row">
              <div className="single-blog-card">
                <Link to='/blogs' className='align-items-center d-flex gap-15'> <MdArrowBack className='fs-4'/> Go to blogs page</Link>
                <h3 className="title">Good Monday</h3>
                <img src={blog} className='image-fluid w-100 my-4' alt="singleblogpic" />
                <p>You are what you call yourself dadadad trust me!</p>

              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Singleblog