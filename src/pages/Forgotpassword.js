import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
    <>
    <Meta title={"Forgot password"} />
    <BreadCrumb title='Forgot password' />
    <div className="login-wrapper py-5 homewrapper-2">
      <div className="container-xxl">
          <div className="row">
              <div className="col-3">
                  <div className="auth-card">
                      <h3 className='mt-1 text-center'>Reset password</h3>
                      <p className='text-center my-2 mb-3'>We will send an email to reset your password</p>
                      <form action="" className="d-flex flex-column gap-15">
                          
                          <div>
                          <input type="email" name='email' placeholder='email' className='form-control' />
                          </div>
                          
                          <div>
                             
                              <div className="d-flex  flex-column justify-content-center align-items-center gap-15">
                                  <button className="button border-0"type='submit'>Submit</button>
                                
                                  <Link to="/login">Cancel</Link>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </>
  )
}

export default Forgotpassword