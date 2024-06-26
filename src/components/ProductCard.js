import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import prodcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'
import wishlist from '../images/wishlist.svg'
import watch from '../images/watch.jpg'
import watch2 from '../images/watch-1.avif'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  // alert(location);
  return (
    <>
      <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
      <Link to=':id' className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'>
              <img src={wishlist} alt="wishlist" />
            </button>
        </div>
        <div className="product-image">
          <img src={watch} className='img-fluid' alt="product" />
          <img src={watch2} className='img-fluid' alt="product" />
        </div>
        <div className="product-details">
          <h5 className="product-title">
            Kids headphones wholesale
          </h5>
          <ReactStars
    count={5}
    size={24}
    edit={false}
    value='3'
    activeColor="#ffd700"
  />
  <p className={`'description' ${grid=== 12 ? "d-block" : "d-none"}`} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa, aliquid?</p>
 
 
          <p className="price">$100.00</p>
          
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            <button className='border-0 bg-transparent'>
                  <img src={prodcompare} alt="compare" />
                </button>
                <button className='border-0 bg-transparent'>
                  <img src={addcart} alt="addcart" />
                </button>
                <button className='border-0 bg-transparent'>
                  <img src={view} alt="view" />
                </button>
                
            </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wishlist} alt="wishlist" />
            </Link>
        </div>
        <div className="product-image">
          <img src={watch} className='img-fluid' alt="product" />
          <img src={watch2} className='img-fluid' alt="product" />
        </div>
        <div className="product-details">
          <h6 className='brand'>havels</h6>
          <h5 className="product-title">
            Kids headphones wholesale
          </h5>
          <ReactStars
    count={5}
    size={24}
    edit={false}
    value='3'
    activeColor="#ffd700"
  />
  <p className={`'description' ${grid=== 12 ? "d-block" : "d-none"}`} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa, aliquid?</p>
 
          <p className="price">$100.00</p>
          
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            <buton className='border-0 bg-transparent'>
                  <img src={prodcompare} alt="compare" />
                </buton>
                <buton className='border-0 bg-transparent'>
                  <img src={addcart} alt="addcart" />
                </buton>
                <buton className='border-0 bg-transparent'>
                  <img src={view} alt="view" />
                </buton>
                
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductCard