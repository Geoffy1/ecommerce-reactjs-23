import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {NavLink, Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";


const Checkout = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title='Login' />
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className="speedysolns">
                            <nav style={{"--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
  <ol className="breadcrumb"> 
    <li className="breadcrumb-item text-dark"><Link to='/cart'>Cart</Link></li>
    &nbsp; /
    <li className="breadcrumb-item active" aria-current="page">Information</li>
    &nbsp; /<li className="breadcrumb-item active">Shipping</li>
    &nbsp; /
    <li className="breadcrumb-item active" aria-current="page">Payment</li>
  </ol>
</nav>
<h4 className="title">Contact Info</h4>
<p className="user-details">geojogu@gmail</p>
<form action="" className="d-flex gap-15 flex-wrap justify-content-between">
  <div>
    <select name="" id="" className="form-control form-select">
      <option value="" selected disabled >Select Country</option>
    </select>
  </div>
  <div></div>
  <div className='flex-grow-1'>
    <input type="text"  placeholder='firstname' className="form-control" />
  </div>
  <div className='flex-grow-1'>
    <input type="text" placeholder='lastname'  className="form-control" />
  </div>
  <div className='w-100'>
    <input type="text" placeholder='adress'  className="form-control" />
  </div>
  <div className='w-100'>
    <input type="text" placeholder='Appartment, suite'  className="form-control" />
  </div>
  <div className='flex-grow-1'>
    <input type="text" placeholder='City' className="form-control" />
  </div>
  <div className='flex-grow-1'>
    <select name="" id="" className="form-control form-select">
      <option value="" selected disabled >Select State</option>
    </select>
  </div>
  <div className='flex-grow-1'> 
    <input type="text" placeholder='Zipcode' className="form-control" />
  </div>
  <div className="w-100">
    <div className="d-flex justify-content-between align-items-center">
      <Link to='/cart' className='text-dark'><IoIosArrowRoundBack className='me-2' /> Return to cart</Link>
      <Link to='/shipping' className='button'  >Continue to Shipping</Link>
    </div>
  </div>

</form>
                        </h3>
                    </div>
                </div>
                <div className="col-5"></div>
            </div>
        </div>
      </div>
    </>
  )
}
export default Checkout