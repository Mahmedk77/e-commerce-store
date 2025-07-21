import { createContext, use, useEffect, useState } from "react";
import { products } from "../assets/assets.js";
import toast from "react-hot-toast";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("");
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {

        let cartData = structuredClone(cartItems);
        if(!size){
            toast.error('Please select a size');
            return;
        }

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
            
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    }

    useEffect(()=>{
        console.log(cartItems);
        

    }, [cartItems])

    const currency = "$";
    const delivery_fee = 10;
    const value = {
        products, currency, delivery_fee, showSearch, setShowSearch,
        search, setSearch, cartItems, setCartItems, addToCart
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
