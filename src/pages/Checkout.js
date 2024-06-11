import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {NavLink, Link } from 'react-router-dom';


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
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    &nbsp; /
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
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