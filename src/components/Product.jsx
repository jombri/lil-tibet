import { FavoriteBorder } from '@mui/icons-material';
import React, { useContext } from 'react';
import styled from 'styled-components'
// import ShopContext from '../context/ShopContext';
import {ShopContext} from '../context/ShopContext'

const Container = styled.div`
  width: 100%;
  height:450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid lightgrey;
  margin: 0 auto;
  padding: 20px 10px 0;
  row-gap: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
  `;

const InfoContainer = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const Info = styled.div``

const Icon = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: crimson;
    transform: scale(1.2);
  }
`
const Price = styled.p``

const AddButton = styled.button`
    width: 100%;
    max-width: 200px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: lightgrey;
    }
`;

const Product = ({item}) => {
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[item.id]

  return (
    <Container>
      <Image src={item.img}/>
      <InfoContainer>
        <Info>
          <Price>${item.price}</Price>
        </Info>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </InfoContainer>
      <AddButton onClick={() => addToCart(item.id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</AddButton>
    </Container>
  )
}

export default Product