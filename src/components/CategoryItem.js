import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    & :hover {
        cursor: pointer;
    }
`
const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;

`
const Info = styled.div`
    padding: 10px;
    text-align: center;
`
const Title = styled.h2`
    font-size: clamp(1.2rem, 2vw, 2rem);
`

const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
            <Info>
                <Title>{item.title}</Title>
            </Info>
            <Image src={item.img}/>
        </Link>
    </Container>
  )
}

export default CategoryItem