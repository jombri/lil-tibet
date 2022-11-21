import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    flex: 1;
    /* height: 500px; */
    & :hover {
        cursor: pointer;
    }
`
const Image = styled.img`
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
    ${mobile({height: "40vh"})}

`
const Info = styled.div`
    /* background-color: rgba(195, 195, 195, 0.2); */
    /* height: 30px; */
    padding: 10px;
    text-align: center;
`
const Title = styled.h2`
    font-size: clamp(1.5rem, 3vw, 2rem);
`

/* const Button = styled.button`

` */

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Info>
            <Title>{item.title}</Title>
            {/* <Button>SHOP NOW</Button> */}
        </Info>
        <Image src={item.img}/>
    </Container>
  )
}

export default CategoryItem