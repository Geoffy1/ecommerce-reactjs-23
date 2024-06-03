import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {Link} from 'react-router-dom'

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shiiping Policy"} />
    <BreadCrumb title='Shiiping Policy' />
    <section className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-">
                    <div className="policy"></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ShippingPolicy