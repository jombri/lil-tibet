import React, { createContext, useState } from 'react'
import { allProducts } from '../merchData';

export const ShopContext = createContext(null);

const getInitialCart = () => {
    let cart = {};
    for (let i = 1; i < allProducts.length +1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getInitialCart());
    // console.log(cartItems)
    // const [totalItems, setTotalItems] = useState();

    // const totalCartItems = (cartItems) => {
    //     let totalItems = 0;
    //     for (const item in cartItems) {
    //         totalItems += cartItems[item];
    //     } 
    //     setTotalItems(totalItems)
    //     return totalItems;
    // };
    // totalCartItems();
    // console.log(totalItems);
    // console.log(totalCartItems());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProducts.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};


  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContext