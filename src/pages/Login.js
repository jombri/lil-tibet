import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
    width: 100vw;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    margin-top: 150px;
`;

const Wrapper = styled.div`
    width: 400px;
    max-width: 500px;
    padding: 20px;
    margin: 0px 10px;
    border: 2px solid black;

`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    `;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    text-transform: uppercase;
`;

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <>
        <Navbar />
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>Login</Button>
                    <Link>Do you not remember the password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    </>
  )
}

export default Login