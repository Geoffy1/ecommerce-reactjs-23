import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';
import React from 'react';
import watch from '../images/watch.jpg'
import { RiDeleteBinFill } from "react-icons/ri";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title='Cart' />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="cart-header d-flex justify-content-between align-items-center">
                        <h4 className="cart-col-1">Product</h4>
                        <h4 className="cart-col-2">Quantity</h4>
                        <h4 className="cart-col-3">Price</h4>
                        <h4 className="cart-col-4">Total</h4>
                    </div>
                    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                        <div className="cart-col-1 d-flex align-items-center">
                            <div className="w-25">
                                <img src={watch} alt="product image" />
                            </div>
                            <div className="w-75">
                                <p>title</p>
                                <p>S</p>
                                <p>#A5</p>
                            </div>
                        </div>
                        <div className="cart-col-2">
                            <h5 className="price">$ 100</h5>
                        </div>
                        <div className="cart-col-3 d-flex align-items-center gap-15">
                            <div>
                                <input className='form-control' min={1} max={140} type="number" id='' />
                            </div>
                            <div>
                                <RiDeleteBinFill className='text-danger' />
                            </div>
                        </div>
                        <div className="cart-col-4">
                            <h5 className="price">$ 100</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 py-2">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <Link to='/product' className='button'>Continue to shopping</Link>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                         <h4>Subtotal: $1000</h4>
                        <p>Taxes and shipping costs</p>
                        <Link to='/checkout' className='button'>Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
export default Cart