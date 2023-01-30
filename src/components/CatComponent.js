// import React from 'react'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { allProducts } from '../merchData'
import CatProduct from './CatProduct'
// import { useParams } from 'react-router-dom'
import { useState } from 'react'
// import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
/* const Title = styled.h2`
    font-size: clamp(1.5rem, 3vw, 3rem);
`; */
const ProductContainer = styled.div`
  padding: 50px 0px 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;


const CatComponent = ({ filters, sort, cat}) => {
  // const { cat } = useParams();
  console.log(filters, sort, cat)

  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProducts(allProducts);
  }, [cat]);
  
  console.log(products)


  return (
    // <Container>
    <Container className='wrapper'>
      {/* <Title>All CatComponent</Title> */}
      {/* <h1>This is cat: {cat}.</h1> */}
      <ProductContainer>
        {products.map(item => (
            <CatProduct item={item} key={item.id} />
        ))}
        {/* {filteredProducts.map(item => (
            <CatProduct item={item} key={item.id} />
        ))} */}
      </ProductContainer>
    </Container>
  )
}

export default CatComponent