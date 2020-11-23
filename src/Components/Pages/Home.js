import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Trending from '../TrendingProduct/Trending';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Trending></Trending>
      <Banner></Banner>
      <Product></Product>
      <Footer></Footer>
    </>
  )
}

export default Home
