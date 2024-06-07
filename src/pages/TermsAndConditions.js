import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'


const TermsAndConditions = () => {
  return (
    <>
      <Meta title={"Terms And Conditions"} />
    <BreadCrumb title='Terms And Conditions' />
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

export default TermsAndConditions
