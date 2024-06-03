import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {Link} from 'react-router-dom'

const Resetpassword = () => {
  return (
    <>
    <Meta title={"Reset password"} />
    <BreadCrumb title='Reset password' />
    <div className="login-wrapper py-5 homewrapper-2">
      <div className="container-xxl">
          <div className="row">
              <div className="col-3">
                  <div className="auth-card">
                      <h3 className='mt-1 text-center'>Reset password</h3>
                      <form action="" className="d-flex flex-column gap-15">
                          
                          
                          <div>
                          <input type="passwordl" name='password' placeholder='password' className='form-control' />
                          </div>
                          <div>
                          <input type="password" name='password' placeholder='password' className='form-control' />
                          </div>
                          
                          <div>
                             
                              <div className="d-flex  flex-column justify-content-center align-items-center gap-15">
                                  <button className="button border-0">Reset</button>
                                
                                  <Link to="/login">Already have an account</Link>
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

export default Resetpassword