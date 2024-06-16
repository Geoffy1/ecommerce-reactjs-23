import React from 'react'
// import { Link, useLocation } from 'react-router-dom'

const Container = (props) => {
  return (
    
      <section className='props.class1'>
        <div className="container-xxl">
            {props.children}
        </div>
      </section>
    
  )
}
export default Container