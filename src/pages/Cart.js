import { Add, Remove, KeyboardArrowRight } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div`
   /*  width: 100vw;
    height: 100vh; */
`;

const Wrapper = styled.div`
    /* padding: 20px; */
    width: 90%;
    max-width: 1420px;
    margin: 0 auto;
    ${mobile({padding: "10px", display: "flex", flexDirection: "column"})}

`;

const Title = styled.h1`
    margin: 20px 0 50px 0;
    /* font-weight: 300; */
    /* text-align: center; */
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})}

`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 15px;
    /* ${mobile({flexDirection: "column"})} */

`;

const Info = styled.div`
    flex: 5;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    /* ${mobile({flexDirection: "column"})} */
`;

const ProductDetail = styled.div`
    display: flex;
    flex: 2;
    column-gap: 15px;
    ${mobile({columnGap: "10px"})}

`;

const Image = styled.img`
    width: 300px;
    ${mobile({width: "100px"})}

`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
    ${mobile({margin: "15px 0"})}

`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 1rem;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}

`;

const ProductPrice = styled.div`
    font-size: 1.5rem;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 2;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    /* height: 50vh; */
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "1.5rem"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 15px;
    /* background-color: black; */
    /* color: white; */
    font-weight: 600;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    margin-bottom: ${(props) => props.type === "filled" && "20px"};
    cursor: pointer;
`;

const ContinueShopBox = styled.div`
    display: flex;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Shopping Bag</Title>
{/*             <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout Now</TopButton>
            </Top> */}
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="../images/tibetan-shoe-black.webp"/>
                            <Details>
                                <ProductName><b>Product:</b> Tibetan traditional boots</ProductName>
                                <ProductId><b>ID:</b> 3475495512</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size:</b> 38</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>5</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 80</ProductPrice>
                        </PriceDetail>
                    </Product>

                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src="../images/tibetan-shoe-brown.webp"/>
                            <Details>
                                <ProductName><b>Product:</b> Tibetan tranditional boots</ProductName>
                                <ProductId><b>ID:</b> 3475495514</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size:</b> 38</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>5</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 80</ProductPrice>
                        </PriceDetail>
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
                    <ContinueShopBox>
                        <a>
                            <span>Continue Shopping</span> <KeyboardArrowRight/>
                        </a>
                        
                    </ContinueShopBox>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart