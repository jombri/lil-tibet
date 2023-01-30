import React from 'react';
import styled from 'styled-components';
// import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 500px;
    height: 100vh;
    margin: auto;
`;

const Title = styled.h1`
    font-size: 4rem;
    `;

const Message = styled.p`
    font-size: clamp(1rem, 5vw, 2rem);
    `;

const HomePageLink = styled(Link)`
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
    color: black;
    `;

const ErrorPage = () => {
  return (
    <>
        {/* <Navbar /> */}
        <Container className='wrapper'>
            <Title>404!</Title>
            <Message>Sorry, this page cannot be found!</Message>
            <HomePageLink to="/">Return to Home</HomePageLink>
        </Container>
    </>
  )
}

export default ErrorPage