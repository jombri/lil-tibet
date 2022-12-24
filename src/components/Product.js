import { FavoriteBorder } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height:450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid lightgrey;
  margin: 0 auto;
  padding: 20px 0 0 0;
  row-gap: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  `;

const InfoContainer = styled.div`
  width: 100%;
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

const Product = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <InfoContainer>
        <Info>
          <Price>{item.price}</Price>
        </Info>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </InfoContainer>
    </Container>
  )
}

export default Product