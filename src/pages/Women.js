import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';

const Title = styled.h1`
    font-size: 2rem;
    `;
const Notice = styled.h2`
    font-size: 1.5rem;
    `;

const Women = () => {
  return (
    <>
        <Navbar />
        <Title>Women</Title>
        <Notice>Sorry, under maintainence.</Notice>
        
    </>
  )
}

export default Women