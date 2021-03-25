import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = React.createContext();

export function CartProvider(props){
    const [ cartItems, setCartItems ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try{
                const result = await axios(
                    'https://60594847b11aba001745bd6f.mockapi.io/Products',
                  );
                  setCartItems(result.data);
                console.log(result.data);
            }catch(e){
                console.log(e);
            }
        }
        fetchData();
    }, []);

    const addToCart = (item) => {
       
        const newCart = [...cartItems];
        const index = newCart.indexOf(item);
        ++newCart[index].quality;
        setCartItems(newCart);
    }

    const decreaseQuality = (item) => {
        console.log(item);
        const newCart = [...cartItems];
        const index = newCart.indexOf(item);
        --newCart[index].quality;
        setCartItems(newCart);
    }

    const getTotal = () => {
        if(cartItems.length == 0) return;
        let price = 0;
        for (const item of cartItems) {
            price += item.quality * item.price;
        }
        return price;
    }
    return(
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            decreaseQuality,
            getTotal,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

// export default CartProvider;