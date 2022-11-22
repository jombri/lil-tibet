import React from 'react'
import styled from 'styled-components'
import { allProducts } from '../merchData'
import Product from './Product'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    font-size: clamp(1.5rem, 3vw, 3rem);
`;
const ProductContainer = styled.div`
  padding: 50px 0px 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Products = () => {
  return (
    <Container className='wrapper'>
      <Title>All Products</Title>
      <ProductContainer>
        {allProducts.map(item => (
            <Product item={item} key={item.id} />
        ))}
      </ProductContainer>
    </Container>
  )
}

export default Products