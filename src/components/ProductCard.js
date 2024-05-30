import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  alert(location);
  return (
    <div className={`${location.pathname == "/store" ? `col-${grid}` : "col-3"} `}>
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
  )
}

export default ProductCard