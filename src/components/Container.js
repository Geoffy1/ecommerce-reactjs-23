import React from 'react'
// import { Link, useLocation } from 'react-router-dom'

const Container = () => {
  return (
    <>
      <section>
        <div className="container-xxl">
            {props.children}
        </div>
      </section>
    </>
  )
}
export default Container