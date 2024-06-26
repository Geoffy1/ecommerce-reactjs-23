import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
    <Container class1='home-wrapper-1 py-5' >
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
    </Container>
    <Container class1='home-wrapper-2 py-5'>
      <div className="row">
        <div className="col-12">
          <div className="services d-flex align-items-center justify-content-between">
            {
              services?.map((i,j)=> {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      
    </Container>
       
      {/* <section clas sName="home-wrapper-2 py-5">
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
      </section> */}
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
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-watch.avif" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. <br /> for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/lapi.png" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Studio Display</h5>
                  <h6>600 nits of brightness.</h6>
                  <p>27-inch 5K Retina display<br /> for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/tenje.png" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Smartphones</h5>
                  <h6>Smartphone 13 Pro.</h6>
                  <p>Now in Green From $999.00 <br /> or $41.62/mo. for 24 mo. Footnote*</p>
              </div>
            </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/r-speakers.jpg" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Home speakers</h5>
                  <h6>Room-filling sound</h6>
                <p>From $699 <br /> or $116.58/mo. for 12 mo.**</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
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

            
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            
            </div>
            <div className="col-3">
            <BlogCard />
            
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Home;