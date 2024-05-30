import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component";
import Meta from '../components/Meta'
import ProductCard from "../components/ProductCard"

const OurStore = () => {
  const [grid, setGrid] = useState(4);



  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title='Our Store' />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Shop by Categories
                </h3>
                <div>
                  <ul>
                    <li>Watch</li>
                    <li>laptop</li>
                    <li>TV</li>
                    <li>camera</li>
                  </ul>
                </div>

              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Filter by
                </h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input className='form-check-input' id='' value="" type="checkbox" />
                      <label className="form-check-label" htmlFor="">In Stock (1)</label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' id='' value="" type="checkbox" />
                      <label className="form-check-label" htmlFor="">Out of Stock ()</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating ">
                      <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlfor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                      <label htmlfor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                      <ul className='colors'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className='form-check-input' id='color-1' value="" type="checkbox" />
                      <label className="form-check-label" htmlFor="color-1">S (2)</label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' id='color-2' value="" type="checkbox" />
                      <label className="form-check-label" htmlFor="color-2">M (2)</label>
                    </div>
                  </div>


                </div>
                <div></div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Product Tags
                </h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">ipod</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Random Product
                </h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                    </div>
                    <div className="w-75">
                      <h5>Kids ditigal watch Multi-pack</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value='3'
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/headphone.jpg" className='img-fluid' alt="headphone" />
                    </div>
                    <div className="w-75">
                      <h5>Kids headphones multi-colors</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value='3'
                        activeColor="#ffd700"
                      />
                      <b>$ 500</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className='filter=-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className=" d-flex align-items-center gap-10">
                    <p className='mb-0 d-block'>Sort By:</p>
                    <select name="" id="" className='form-control form-select'>
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0 " style={{ "width": "100px" }}>21 products</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img onClick={() => { setGrid(3); }} src="images/gr4.svg" alt="grid" className="d-block img-fluid" />
                      <img onClick={() => { setGrid(4); }} src="images/gr3.svg" alt="grid" className="d-block img-fluid" />
                      <img onClick={() => { setGrid(6); }} src="images/gr2.svg" alt="grid" className="d-block img-fluid" />
                      <img onClick={() => { setGrid(12); }} src="images/gr.svg" alt="grid" className="d-block img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex flex-wrap gap-10">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default OurStore