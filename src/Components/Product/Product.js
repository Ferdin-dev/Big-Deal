import React, {useState} from 'react'

const Product = () => {
  const [products, setProduct] = useState([
    {
      images: "/images/products/bags/1.jpg",
      name: "Slim Fit Cotton Shirt",
      price: 500.00
    },
    {
      images: "/images/products/bags/6.jpg",
      name: "Slim Fit Cotton Shirt",
      price: 200.00
    },
    {
      images: "/images/products/bags/7.jpg",
      name: "Slim Fit Cotton Shirt",
      price: 150.00
    },
    {
      images: "/images/products/bags/9.jpg",
      name: "Slim Fit Cotton Shirt",
      price: 450.00
    }
  ])
  return (
    <>
      <div className="product-section">
        <div className="container">
          <div className="product-grid-container">
            <div className="new-product-section">
              <h4 className="new-product-title">New product</h4>
              {products.map(product =>(
                <div className="new-product-item" key={product.images}>
                  <div className="product-img">
                    <img src={product.images} alt=""/>
                  </div>
                  <div className="new-product-info">
                    <div className="star-icon">
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star-half-o"></i>
                      </div>
                      <h4>{product.name}</h4>
                      <p>${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="onsale-product">
              <div className="product-head">
                <h4>On sale</h4>
                <h1>Season sale</h1>
              </div>
                <div className="product-item">
                    <div className="img">
                      <img src="/images/products/bags/6.jpg" alt=""/>
                    </div>
                    <div className="product-detail">
                      <div className="star-icon">
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star-half-o"></i>
                      </div>
                      <h4>Slim Fit Cotton Shirt</h4>
                      <p>$200.00</p>
                    </div>
                    <div className="product-btns">
                      <a href="ww" className="add-btn" title="Add To Cart"><i className="icon-cart-plus"></i></a>
                      <a href="ww" className="add-btn" title="Add To Wishlist"><i className="icon-shopping-bag"></i></a>
                      <a href="ww" className="add-btn" title="Compare"><i className="icon-calendar-check-o"></i></a>
                    </div>
                  </div>
            </div>
            <div className="new-product-section">
              <h4 className="new-product-title">Feature product</h4>
              {products.map(product =>(
                <div className="new-product-item" key={product.images}>
                  <div className="product-img">
                    <img src={product.images} alt=""/>
                  </div>
                  <div className="new-product-info">
                    <div className="star-icon">
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star-half-o"></i>
                      </div>
                      <h4>{product.name}</h4>
                      <p>${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
