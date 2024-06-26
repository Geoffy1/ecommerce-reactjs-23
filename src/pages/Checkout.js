import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {NavLink, Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import watch from '../images/watch.jpg'


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
    <li className="breadcrumb-item text-dark"><Link  total-price to='/cart'>Cart</Link></li>
    &nbsp; /
    <li className="breadcrumb-item  total-price active" aria-current="page">Information</li>
    &nbsp; /<li className="breadcrumb-item  total-price active">Shipping</li>
    &nbsp; /
    <li className="breadcrumb-item active" aria-current="page">Payment</li>
  </ol>
</nav>
<h4 className="title total ">Contact Info</h4>
<p className="user-details total ">geojogu@gmail</p>
<h4 className="mb-3">Shipping Adress</h4>
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
                <div className="col-5">
                  <div className="border-bottom py-4">
                    <div className="d-flex gap-10 mb-2 align-items-center">
                      <div className='w-75 d-flex gap-10'>
                      <div className='w-25 position-relative'>
                        <span 
                         style={{top: "-10px", right: "2px" }}  className="badge bg-secondary rounded-circle p-2 text-white position-absolute">1</span>
                        <img className='img-fluid' src={watch} alt="" />
                      </div>
                      <div>
                        <h5 className="total-price">speeedyiis</h5>
                        <p className='total-price' >seeepeeedy</p>
                      </div>
                    </div>
                    <div flex-grow-1>
                      <h5 className='total'>$ 100</h5>
                    </div>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className='total'>Subtotal</p>
                      <p className='total-price' >$ 10000</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className='mb-0 total' >Shipping</p> 
                      <p className='mb-0 total-price' >$ 1000</p>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-4align-items-center">
                      <h4 className='total' >Total</h4>
                      <h5 className='total-price' >$ 10000</h5>
                    </div>
                  </div>

                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default Checkout