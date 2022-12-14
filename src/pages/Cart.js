import { Add, Remove, KeyboardArrowRight } from '@mui/icons-material'
import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { tablet } from '../responsive'
import { CategoryLink } from '../components/Navbar'

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1420px;
    margin: 0 auto;

`;

const Title = styled.h1`
    margin: 20px 0 50px 0;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-bottom: 100px;
    ${tablet({flexDirection: "row", columnGap: "1rem"})}
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${tablet({flex: 3, border: "1px solid gray", padding: "1rem"})}
`;

const Product = styled.div`
    display: flex;
    column-gap: 2%;
    height: 100%;
    max-height: 210px;
`;

const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    column-gap: 15px;
    min-width: 150px;
`;

const Image = styled.img`
    width: 45%; 
    min-width: 50px;
    object-fit: contain;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 5px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 1rem;
    margin: 5px;

`;

const ProductPrice = styled.div`
    font-size: 1.5rem;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 1.5rem;
`;

const Summary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    ${tablet({minWidth: "250px", flex: 1})}
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    font-size: 1.5rem;
    ${tablet({fontSize: "clamp(1.5rem, 2vw, 2rem)"})}
`;

const SummaryItem = styled.div`
    width: 100%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "1.5rem"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 70%;
    max-width: 300px;
    padding: 15px;
    margin: auto;
    font-weight: 600;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    margin-bottom: ${(props) => props.type === "filled" && "20px"};
    cursor: pointer;
    ${tablet({width: "100%"})}
`;

const ContinueShopBox = styled(CategoryLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: auto;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    color: black;
    ${tablet({fontSize: "clamp(1rem, 2vw, 1.5rem)"})}
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Shopping Bag</Title>
            <Bottom>
                <Info>
                    <Product>
                        <Image src="../images/tibetan-shoe-black.webp"/>
                        <ProductDetail>
                            <Details>
                                <ProductName><b>Product:</b> Tibetan traditional boots</ProductName>
                                <ProductId><b>ID:</b> 3475495512</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size:</b> 38</ProductSize>
                            </Details>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>5</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 80</ProductPrice>
                            </PriceDetail>
                        </ProductDetail>
                    </Product>

                    <Hr/>

                    <Product>
                        <Image src="../images/tibetan-shoe-brown.webp"/>
                        <ProductDetail>
                            <Details>
                                <ProductName><b>Product:</b> Tibetan tranditional boots</ProductName>
                                <ProductId><b>ID:</b> 3475495514</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size:</b> 38</ProductSize>
                            </Details>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>5</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 80</ProductPrice>
                            </PriceDetail>
                        </ProductDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 160</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ - 10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 160</SummaryItemPrice>
                    </SummaryItem>
                    <Button type="filled">Checkout</Button>
                    <ContinueShopBox to="/">
                        <span>Continue Shopping</span> <KeyboardArrowRight/>
                    </ContinueShopBox>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart