import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";


const SingleProduct = () => {

  const props = {width: 400, height: 600, zoomWidth: 600, img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"};
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title='Product Name' />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                  <div className='main-product-image'>
                    <div>
                    <ReactImageZoom {...props} />
                    </div>
                  </div>
                  <div className="other-products-images  d-flex gap-15">
                    <div>
                      <img   alt=''   className='img-fluid' src='https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'/>
                    </div>
                    <div>
                      <img  alt=''  className='img-fluid' src='https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'/>
                    </div>
                    <div>
                      <img alt=''  className='img-fluid'  src='https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'/>
                    </div>
                    <div>
                      <img alt=''  className='img-fluid'  src='https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'/>
                    </div>
                  </div>
                  </div>
                <div className="col-6">
                  <div className='main-product-details'>
                    <div className='border-bottom'>
                      <h3 className="title">
                        Chique headphones Bulk sale Customizes available
                      </h3>
                    </div>
                    <div className="border-bottom py-3">
                      <p className="price">$ 100</p>
                      <div className="d-flex align-items-center gap-10">
                    
                  <ReactStars
    count={5}
    size={24}
    edit={false}
    value='3'
    activeColor="#ffd700"
  />
  <p className='mb-0'>(2 reviews)</p>
                  </div>
                  <a href="#review">Write a review</a>

                    </div>
                    <div className=" py-3">
                      <div className="d-flex gap-10 align-items-center ">
                        <h3 className='product-heading' >Type :</h3>
                        <p className='product-data' >Watch</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center ">
                        <h3 className='product-heading' >Brand :</h3>
                        <p className='product-data' >gfd</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center ">
                        <h3 className='product-heading' >Categories :</h3>
                        <p className='product-data' >gfd</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center ">
                        <h3 className='product-heading' >Tags :</h3>
                        <p className='product-data' >gfd</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center ">
                        <h3 className='product-heading' >Availabilty :</h3>
                        <p className='product-data' >gfd</p>
                      </div>
                      
                      
                      <div className="d-flex gap-10 flex-column mb-3 mt-2 ">
                        <h3 className='product-heading' >Size :</h3>
                        <div className="d-flex flex-wrap gap-15">
                          <span className="badge border-1 border bg-white text-dark border-secondary">S</span>
                          <span className="badge border-1 border bg-white text-dark border-secondary">M</span>
                          <span className="badge border-1 border bg-white text-dark border-secondary">XL</span>
                          <span className="badge border-1 border bg-white text-dark border-secondary">XXL</span>
                        </div>
                      </div>
                      <div className="d-flex gap-10 flex-column mb-3 mt-2 border">
                        <h3 className='product-heading' >Color :</h3>
                        <Color />
                      </div>
                      <div className="d-flex gap-15 align-items-center flex-row mb-3 mt-2 ">
                        <h3 className='product-heading' >Quantity :</h3>
                        <p className='product-data' >In stock</p>
                        <div>
                          <input className='form-control' type="number" name='' style={{width: '50px'}} main={1} max={10} id='' />
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-30 ms-5">
                                    <button className="button"type='submit'>Buy Now</button>
                                    <button to="/signup" className="button signup">Add to cart</button>
                                </div>
                      </div>
                      <div className='d-flex align-items-center gap-15' >
                        <div>
                          <a href=""> <GoGitCompare className='fs-5 me-2' /> Add to Compare</a>
                        </div>
                        <div>
                          <a href=""> <CiHeart className='fs-5 me-2' /> Add to wishlist</a>
                        </div>
                      </div>
                      <div className="d-flex gap-10 flex-column my-3 ">
                        <h3 className='product-heading' >Shipping & Returns :</h3>
                        <p className='product-data' >free shipping in East africa</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-3 ">
                        <h3 className='product-heading' >Product Link :</h3>
                        <a href='javascript:void(0);' onClick={()=> {
                          copyToClipboard('https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D');
                          }}>Copy Product Link</a>
                      </div>
                      
                    </div>
                  </div>
                </div>
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
              <h3 id='review' >Reviews</h3>
             <div className='review-inner-wrapper'>
             <div className="review-head d-flex justify-content-between align-items-end ">
                <div>
                  <h4  className="mb-2">Customer Reviews</h4>
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