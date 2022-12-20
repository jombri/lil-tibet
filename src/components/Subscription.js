import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    /* height: 60vh; */
    /* background-color: #fcf5f5; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.div`
    font-size: 2rem;
    margin-bottom: 20px;
    text-transform: uppercase;
`;
const Desc = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 100%;
    height:50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    border: none;
    /* flex: 20; */
    padding-left: 15px;
`;
const Button = styled.button`
    /* flex: 1; */
    border: none;
    background-color: teal;
    color: white;
    width: 50px;
`;

const Subscription = () => {
  return (
    <Container>
        <Title>Newsletter Subscription</Title>
        <Desc>for latest products and limited promotions</Desc>
        <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Subscription