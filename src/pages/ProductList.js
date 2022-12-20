import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { mobile } from '../responsive'

const Container = styled.div`

`;

const Title = styled.h2`
    margin: 1rem;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
`;

const Filter = styled.div`
    margin: 1rem;
    max-width: 200px;
    ${mobile({margin: "0", display: "flex", flexDirection: "column", flex: "1"})}

`;

const FilterText = styled.span`
    font-size: 1rem;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0"})}

`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0"})}

`;
const Option = styled.option`

`;


const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Shop all</Title>
        <FilterContainer>
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
            <Filter>
                <FilterText>Sort:</FilterText>
                <Select>
                    <Option selected>NEWEST</Option>
                    <Option>RELEVANCE</Option>
                    <Option>PRICE LOW TO HIGH</Option>
                    <Option>PRICE HIGH TO LOW</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Footer />
    </Container>
  )
}

export default ProductList