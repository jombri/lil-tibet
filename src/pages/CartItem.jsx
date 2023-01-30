import React, {useContext}from 'react'
import styled from 'styled-components'
// import { tablet } from '../responsive'
import { Add, Remove } from '@mui/icons-material'
import {ShopContext} from '../context/ShopContext'




const Container = styled.div`
    
`

const CartProduct = styled.div`
    display: flex;
    column-gap: 2%;
    height: 100%;
    max-height: 210px;
`;

/* const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${tablet({flex: 3, border: "1px solid gray", padding: "1rem"})}
`; */

const ItemImage = styled.img`
    width: 45%; 
    min-width: 50px;
    object-fit: contain;
`;

const Price = styled.p`
   max-height: 3rem;
   align-self: center;
`;

const AddButton = styled(Add)`
    
`;

const RemoveButton = styled(Remove)`
    
`;

const ProductAmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* margin-bottom: 20px; */
    max-height: 3rem;
   align-self: center;
   /* margin: 0 auto; */
`;
const AddRemoveContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    max-height: 3rem;
   align-self: center;
   margin: 0 auto;
`

const ProductAmount = styled.input`
    font-size: 1rem;
    margin: 5px;
`; 

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 1.5rem;
`;

export const CartItem = ({item}) => {
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

  return (
    <Container>
        {/* <Info> */}
            <CartProduct>
                <ItemImage src={item.img} />
                <ProductAmountContainer>
                    <Price>${item.price}</Price>
                    <AddRemoveContainer>
                        <AddButton onClick={() => addToCart(item.id)}></AddButton>
                        <ProductAmount value={cartItems[item.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), item.id)} />
                        <RemoveButton onClick={() => removeFromCart(item.id)}></RemoveButton>
                    </AddRemoveContainer>
                </ProductAmountContainer>
            </CartProduct>
            <Hr />
        {/* </Info> */}
        
    </Container>
  )
}
