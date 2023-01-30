import React, { useState } from 'react'
import styled from 'styled-components'
// import Announcement from '../components/Announcement'
// import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
// import { useLocation } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
// import CategoryList from './CategoryList'

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
    // const location = useLocation();
    // const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };
    console.log(filters)
    // console.log(category)

  return (
    <Container>
        {/* <Navbar /> */}
        {/* <Announcement /> */}
        <Wrapper>
            <Title>Shop all</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Sort:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="rel">Relevance</Option>
                        <Option value="asc">Price low to high</Option>
                        <Option value="des">price high to low</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Filter:</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option>blue</Option>
                        <Option>white</Option>
                        <Option>red</Option>
                        <Option>green</Option>
                        <Option>yellow</Option>
                        <Option>black</Option>
                        <Option>brown</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>XL</Option>
                        <Option>L</Option>
                        <Option>M</Option>
                        <Option>S</Option>
                        <Option>XS</Option>
                    </Select>
                </Filter>
            </FilterContainer>
        </Wrapper>
        {/* <CategoryList category={category} filters={filters} sort={sort} /> */}
        {/* <Outlet /> */}
        <Products filters={filters} sort={sort} />
        <Footer />
    </Container>
  )
}

export default ProductList