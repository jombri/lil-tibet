import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { tablet } from '../responsive'
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
    ${tablet({flexDirection: "row", textAlign: "center", rowGap: "20px"})}

`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
    }

`
const Title = styled.h2`
    font-size: 2rem;
    text-transform: uppercase;
`

const Right = styled.div`
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
                <p>(123) - 456 - 7890</p>
                <p>online.customercare@liltibet.com</p>
                <p>
                    Contact Us
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