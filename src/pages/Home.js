// import React from 'react'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Categories />
        <Products />
        <Footer />
    </div>
  )
} 

export default Home