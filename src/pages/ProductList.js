import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Container = styled.div`

`;

const Wrapper = styled.div`
    width: 90%;
    max-width: 1420px;
    margin: 2rem auto;
    `;

const Title = styled.h2`
    font-size: 2rem;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 90%;
    max-width: 300px;
    margin: 2rem 0;
`;

const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
`;

const FilterText = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    align-self: center;
    width: 60px;
`;

const Select = styled.select`
    padding: 5px;
    width: 100%;
    margin-left: 20px;

`;
const Option = styled.option`

`;


const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Shop all</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Sort:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Relevance</Option>
                        <Option>Price low to high</Option>
                        <Option>price high to low</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Filter:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>Blue</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XL</Option>
                        <Option>L</Option>
                        <Option>M</Option>
                        <Option>S</Option>
                        <Option>XS</Option>
                    </Select>
                </Filter>
                
            </FilterContainer>

        </Wrapper>
        <Products />
        <Footer />
    </Container>
  )
}

export default ProductList