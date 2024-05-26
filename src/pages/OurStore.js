import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


const OurStore = () => {

  return (
    <>
      <Meta title={"Our Store"}/>
      <BreadCrumb title='Our Store'/>
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Shop by Categories
                </h3>
                  <ul>
                    <li>Watch</li>
                    <li>laptop</li>
                    <li>TV</li>
                    <li>camera</li>
                  </ul>
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
                

                </div>
                <div></div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Product Tags
                </h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Random Product
                </h3>
              </div>
          </div>
          </div>
          
          <div className="col-9"></div>
        </div>
      </div>
    </>
  )
}

export default OurStore