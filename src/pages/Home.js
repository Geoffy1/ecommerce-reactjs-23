import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PRO5.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 <br />or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVALS.</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVALS.</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999.00 <br /> or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVALS.</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999.00 <br />or $41.62/mo.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over$5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save up to 25% of</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shopping expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory default prices</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>1005 Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 total items</p>

                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                  
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Music 7 gaming</h6>
                    <p>10 total items</p>

                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                  
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 total items</p>

                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                  
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 total items</p>

                  </div>
                  <img src="images/watch.jpg" alt="camera" />
                  
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 total items</p>

                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                  
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Music 7 gaming</h6>
                    <p>10 total items</p>

                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                  
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 total items</p>

                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                  
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 total items</p>

                  </div>
                  <img src="images/watch.jpg" alt="camera" />
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Featured Collection
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div>
                  <img src="" alt="brand" />
                </div>
                
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our Latest News
              </h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;