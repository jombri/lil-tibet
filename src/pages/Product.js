import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    width: 90%;
    margin: 50px auto;
    column-gap: 2%;
    max-height: 50vh;

`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: contain;

`;
const InfoContainer = styled.div`
    flex: 1;

`;
const Title = styled.h2`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 2rem;
`;

const FilterContainer = styled.div`
    width: 100%;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: space-between;
    
`;

const Filter= styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 1rem;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 20px;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 200px;
    justify-content: space-between;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

const Button = styled.button`
    width: 100%;
    max-width: 200px;
    padding: 10px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: lightgrey;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src="../images/winter-coat-skyblue.webp"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Traditional Tibetan Winter Coat</Title>
                <Desc>Traditional Tibetan coat handwoven made of 100% wool. </Desc>
                <Price>$80</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="blue"></FilterColor>
                        <FilterColor color="green"></FilterColor>
                        <FilterColor color="white"></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>XS</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product