import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishItems, setWishItems] = useState([]);
    const [selectedWishlistItems, setSelectedWishlistItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    const incrementQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity++;
        setCartItems(updatedCartItems);
    };

    const decrementQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity--;
            setCartItems(updatedCartItems);
        }
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const addToWishlist = (product) => {
        setWishItems((prevItems) => [...prevItems, product]);
    };

    const removeFromWishlist = (productId) => {
        setWishItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    const moveFromWishlistToCart = () => {
        selectedWishlistItems.forEach(productId => {
            const product = wishItems.find(item => item.id === productId);
            if (product) {
                addToCart(product);
                removeFromWishlist(productId);
            }
        });
        setSelectedWishlistItems([]);
    };

    const handleCheckboxChange = (productId) => {
        if (selectedWishlistItems.includes(productId)) {
            setSelectedWishlistItems(selectedWishlistItems.filter(id => id !== productId));
        } else {
            setSelectedWishlistItems([...selectedWishlistItems, productId]);
        }
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            incrementQuantity,
            decrementQuantity,
            calculateTotalPrice,
            wishItems,
            addToWishlist,
            removeFromWishlist,
            moveFromWishlistToCart,
            selectedWishlistItems,
            handleCheckboxChange
        }}>
            {children}
        </CartContext.Provider>
    );
};
