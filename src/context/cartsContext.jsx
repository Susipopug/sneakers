import axios from 'axios';
import { createContext, useState } from 'react';

export const CartsContext = createContext(); // eslint-disable-line

export const CartsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (obj) => {
    axios.post('https://38805c8e11440cc0.mokky.dev/Cart', obj);
    setCartItems((prevItems) => [...prevItems, obj]);
  };

  const deleteCartItem = (id) => {
    axios.delete(`https://38805c8e11440cc0.mokky.dev/Cart ${id}`);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCartItems = (obj) => {
    if (cartItems.find((item) => item.id === obj.id)) {
      deleteCartItem(obj);
    } else {
      addToCart(obj);
    }
  };

  return (
    <CartsContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        deleteCartItem,
        handleCartItems,
      }}
    >
      {children}
    </CartsContext.Provider>
  );
};
