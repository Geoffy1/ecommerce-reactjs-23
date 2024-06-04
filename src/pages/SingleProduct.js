import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';


const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title='Product Name' />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                  <div className='main-product-image'></div>
                  </div>
                <div className="col-6"></div>
            </div>
        </div>

      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <h4>Description</h4>
              <div className="bg-white p-3">
              
              <p>
                
                Lorem ipsum dolor, sit amet consectur adipisicing elit.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
             <div className='review-inner-wrapper'>
             <div className="review-head d-flex justify-content-between align-items-end ">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    
                  <ReactStars
    count={5}
    size={24}
    edit={false}
    value='3'
    activeColor="#ffd700"
  />
  <p className='mb-0'>Based on5 reviews</p>
                  </div>
                </div>
                
                {orderedProduct && (
                   <div>
                    <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                    
                   </div>
                )}
              </div>
              <div className='review-form py-4'>
                <h4>Write a review</h4>
              <form action="" className='d-flex flex-column gap-15'>
              <div>
              <ReactStars
    count={5}
    size={24}
    edit={true}
    value='4'
    activeColor="#ffd700"
  />
              </div>
                   
                    <div>
                      <textarea name="" id="" className='w-100  form-control' placeholder='Comments' cols="30" rows="5"></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
              </div>
              <div className='reviews mt-3'>
                <div className='review'>
                
  <div className='d-flex align-tems-center gap-10'>
    <h6 className='mb-0' >Geoffy1</h6>
    <ReactStars
    count={5}
    size={24}
    edit={false}
    value='3'
    activeColor="#ffd700"
  />
  </div>
  <p className='mt-3'>Lorem ipsum</p>
                </div>
              </div>
             </div>
            </div>
             

          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our popular products
              </h3>
            </div>
            
          </div>
          <div className="row">
            <ProductCard />
            
            
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct