import React from 'react'
// import Navbar from '../components/Navbar';
// import Categories from '../components/Categories';
import Products from '../components/Products';
import Footer from '../components/Footer';
import styled from 'styled-components';
// import ProductList from './ProductList';

const Container = styled.div`
  height: 100%;
  margin-top: 3rem;
  `;

/* const NavComponent = styled(Navbar)`
  height: 100%;
  position: sticky;
  top: 0;
  `; */

const Home = () => {
  return (
    <Container >
      {/* <NavComponent /> */}
      {/* <Categories /> */}
      <Products />
      {/* <ProductList /> */}
      <Footer />
    </Container>
  )
} 

export default Home