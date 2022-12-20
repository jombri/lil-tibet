import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'
import Subscription from './Subscription'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    border-top: 2px solid lightgrey;
    padding: 100px 0 50px;
    row-gap: 15px;
    text-align: center;
    > div {
        padding: 20px;
        row-gap: 10px;
        flex: 1;
    }
    /* height: 300px; */
    /* ${mobile({flexDirection: "column", rowGap: "15px", textAlign: "center", paddingTop: "15px"})} */
    ${tablet({flexDirection: "row", textAlign: "center", rowGap: "20px"})}

`
const Left = styled.div`
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    p {
        ${mobile({margin: "5px"})}
    }

`
const Title = styled.h2`
    font-size: 2rem;
    text-transform: uppercase;
`

const Right = styled.div`
    /* flex: 1; */
`

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    background-color: teal;
    margin-bottom: 2rem;
`

const SocialIcon = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    &:hover {
        cursor: pointer;
        color: rgba(210, 210, 210, 0.9);
    }
`

const Footer = () => {
  return (
    <>
        <Container className='wrapper'>
            <Left>
                <Title>Customer Care</Title>
                <p>(012) - 345 - 6789</p>
                <p>online.customercare@liltibet.com</p>
                <p>
                    <a href="">Contact Us</a>
                </p>
            </Left>
            <Right>
                <Subscription />
            </Right>
        </Container>
        <SocialContainer>
            <SocialIcon>
                <Facebook/>
            </SocialIcon>
            <SocialIcon>
                <Instagram/>
            </SocialIcon>
            <SocialIcon>
                <Twitter/>
            </SocialIcon>
        </SocialContainer>
    </>
  )
}

export default Footer