import { KeyboardArrowRight } from '@mui/icons-material'
// import { Add, Remove, KeyboardArrowRight } from '@mui/icons-material'
import React, {useContext} from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import { tablet } from '../responsive'
// import { CategoryLink } from '../components/Navbar'
import { allProducts } from '../merchData'
import {ShopContext} from '../context/ShopContext'
import { CartItem } from './CartItem'
import { useNavigate } from 'react-router-dom'



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

const BigBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-bottom: 100px;
    ${tablet({flexDirection: "row", columnGap: "1rem"})}
`;

const CartItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${tablet({flex: 3, border: "1px solid gray", padding: "1rem"})}
`;

const Summary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    row-gap: 3rem;
    ${tablet({minWidth: "250px", flex: 1, maxHeight: "500px", justifyContent: "initial"})}
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    font-size: 1.5rem;
    ${tablet({fontSize: "clamp(1.5rem, 2vw, 2rem)"})}
`;

const SummaryItem = styled.div`
    width: 100%;
    /* margin: 30px 0; */
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
    margin: 0 auto;
    font-weight: 600;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    /* margin-bottom: ${(props) => props.type === "filled" && "20px"}; */
    cursor: pointer;
    ${tablet({width: "100%"})}
`;

const ContinueShopBox = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    max-width: 300px;
    padding: 10px;
    /* width: fit-content; */
    margin: 0 auto;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    color: black;
    background-color: transparent;
    border: none;
    ${tablet({fontSize: "clamp(1rem, 2vw, 1.5rem)"})}
`;

const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <Container>
        {/* <Navbar/> */}
        <Wrapper>
            <Title>Shopping Bag</Title>
            {totalAmount > 0 ? 
                <BigBox>
                    <CartItems>
                        {allProducts.map((item) => {
                            if (cartItems[item.id] !== 0) {
                                return <CartItem item={item} />;
                            }
                            return null;
                        })}
                    </CartItems>
                        <Summary>
                            <SummaryTitle>Order Summary</SummaryTitle>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>${totalAmount}</SummaryItemPrice>
                            </SummaryItem>
                            <Button type="filled">Checkout</Button>
                            <ContinueShopBox onClick={() => navigate("/")}>
                                <span>Continue Shopping</span> <KeyboardArrowRight/>
                            </ContinueShopBox>
                        </Summary>
                </BigBox>
                : <h1>your Cart is Empty</h1>
            }
        </Wrapper>
        <Footer/>
    </Container>
  );
};


export default Cart