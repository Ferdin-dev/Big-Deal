import React, {useState} from 'react';

const Trending = () => {

  const [bags, setBags] = useState([
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
    },
    {
      images: "/images/products/bags/19.jpg",
      name: "Slim Fit Cotton Shirt",
      price: 300.00
    },
    {
      images: "/images/products/bags/20.jpg",
      name: "Slim Fit Cotton Shirt",
      price: 320.00
    },
    {
      images: "/images/products/bags/23.jpg",
      name: "Slim Fit Cotton Shirt",
      price: 400.00
    },
    {
      images: "/images/products/bags/24.jpg",
      name: "Slim Fit Cotton Shirt",
      price: 100.00
    },
  ])

  return (
    <>
      <div className="trending-container">
        <div className="container">
          <div className="product-head">
            <h4>New collection</h4>
            <h1>Trending products</h1>
            <div className="collection-type">
              <ul>
                <li className="active">New arrival</li>
                <li>Woman</li>
                <li>Man</li>
                <li>Kids</li>
                <li>Scholl-bag</li>
              </ul>
            </div>
          </div>
          <div className="product-grid">
              {
                bags.map(bag =>(
                  <div className="product-item" key={bag.images}>
                    <div className="img">
                      <img src={bag.images} alt=""/>
                    </div>
                    <div className="product-detail">
                      <div className="star-icon">
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star-half-o"></i>
                      </div>
                      <h4>{bag.name}</h4>
                      <p>${bag.price}</p>
                    </div>
                    <div className="product-btns">
                      <a href="ww" className="add-btn" title="Add To Cart"><i className="icon-cart-plus"></i></a>
                      <a href="ww" className="add-btn" title="Add To Wishlist"><i className="icon-shopping-bag"></i></a>
                      <a href="ww" className="add-btn" title="Compare"><i className="icon-calendar-check-o"></i></a>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default Trending
