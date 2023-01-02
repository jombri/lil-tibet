import React from 'react'
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  `;

const NavComponent = styled(Navbar)`
  height: 100%;
  position: sticky;
  top: 0;
  `;

const Home = () => {
  return (
    <Container>
        <NavComponent />
        <Categories />
        <Products />
        <Footer />
    </Container>
  )
} 

export default Home