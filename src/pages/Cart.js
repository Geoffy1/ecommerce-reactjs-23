import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';
import React from 'react';

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title='Cart' />
    </>
  )
}
export default Cart