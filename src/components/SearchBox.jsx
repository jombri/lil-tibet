import React from 'react'
import styled from 'styled-components'
import { Close, Search } from '@mui/icons-material';
import { tablet } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 20%;
    z-index: 15;
    position: fixed;
    top: 0;
    background-color: crimson;
    color: white;
    display: ${props => (props.closeSearch ? "none" : "block")};
    ${tablet({height: "30%"})};
    `;

const Wrapper = styled.div`
    width: 90%;
    margin: 5% auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ${tablet({width: "50%"})};
`;

const CloseIcon = styled(Close)`
    cursor: pointer;
    `;

const Hr = styled.hr`
    background-color: lightgray;
    border: none;
    height: 1px;
    width: 100%;
    margin: 1rem auto;
    `;

const InputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

const Input = styled.input`
    width: 100%;
    height: 30px;
    background-color: transparent;
    outline: none;
    border-top: hidden;
    border-right: hidden;
    border-left: hidden;
    border-bottom: 2px solid black;
    color: white;
    `;

    const SearchIcon = styled(Search)`
        cursor: pointer;
        `;

const SearchBox = ({ showSearch, setShowSearch }) => {
  return (
    <>
        {showSearch ? (
            <Container >
                <Wrapper>
                    <CloseIcon onClick={() => setShowSearch(current => !current)}/>
                    <Hr />
                    <InputBox>
                        <Input type="search" placeholder="search . . ."/>
                        <SearchIcon />
                    </InputBox>
                </Wrapper>
            </Container>
        ) : null} 
    </>
  )
};

export default SearchBox