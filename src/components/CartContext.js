import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [adminaccepted, setAdminaccepted] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const [selectedWishlistItems, setSelectedWishlistItems] = useState([]);
  const [values, setValues] = useState({
    producttype: "women",
    category: "sarees",
    productname: "Silk Saree With Maggam Work Blouse",
    productdescription: "Silk Saree With Maggam Work Blouse",
    productimageurl: "https://in.ourpunarvi.com/images/thumbs/0112265_silk-saree-with-maggam-work-blouse_550.jpeg",
    location: "India",
    color: "Orange",
    alteration: "Yes",
    size: "S",
    measurements: "32",
    worn: 1,
    price: 4500,
  });

  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    return storedUser || { firstname: "", lastname: "", email: "" };
  });

  const setUserData = (userData) => {
    setUser(userData);
  };
  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const addToCart = (product) => {
    const exists = cartItems.some(item => item.id === product.id);
    
    if (exists) {
        alert('Product already exists in cart');
        return;
    }

    setCartItems(prevItems => [...prevItems, { ...product }]);
    alert('Product Added to cart')
};


  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    alert('Product removed from cart')
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
    return cartItems.reduce(
      (total, item) => total + item.price,
      0
    );
  };

  const addToWishlist = (product) => {
    const exists = wishItems.some(item => item.id === product.id);
    
    if (exists) {
        alert('Product already exists in wishlist');
        return;
    }

    setWishItems((prevItems) => [...prevItems, product]);
    alert('Product Added to Wishlist')
  };

  const removeFromWishlist = (productId) => {
    setWishItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    alert('Product removed from cart')

  };


  const moveFromWishlistToCart = () => {
    selectedWishlistItems.forEach((productId) => {
      const product = wishItems.find((item) => item.id === productId);
      if (product) {
        addToCart(product);
        removeFromWishlist(productId);
      }
    });
    setSelectedWishlistItems([]);
  };

  const handleCheckboxChange = (productId) => {
    if (selectedWishlistItems.includes(productId)) {
      setSelectedWishlistItems(
        selectedWishlistItems.filter((id) => id !== productId)
      );
    } else {
      setSelectedWishlistItems([...selectedWishlistItems, productId]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        adminaccepted,
        setAdminaccepted,
        user,
        setUserData,
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
        handleCheckboxChange,
        values,
        setValues
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useData() {
  return useContext(CartContext);
}
