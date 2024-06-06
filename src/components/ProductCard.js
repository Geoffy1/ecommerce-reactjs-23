import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import prodcompare from '../images/prodcompare.svg'

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  // alert(location);
  return (
    <>
      <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
      <Link to=':id' className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wishlist.svg" alt="wishlist" />
            </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" className='img-fluid' alt="product" />
          <img src="images/watch-1.avif" className='img-fluid' alt="product" />
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
            <Link>
                  <img src="images/prodcompare.svg" alt="compare" />
                </Link>
                <Link>
                  <img src="images/add-cart.svg" alt="addcart" />
                </Link>
                <Link>
                  <img src="images/view.svg" alt="view" />
                </Link>
                
            </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" className='img-fluid' alt="product" />
          <img src="images/watch-1.avif" className='img-fluid' alt="product" />
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
            <Link>
                  <img src="images/prodcompare.svg" alt="compare" />
                </Link>
                <Link>
                  <img src="images/add-cart.svg" alt="addcart" />
                </Link>
                <Link>
                  <img src="images/view.svg" alt="view" />
                </Link>
                
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductCard