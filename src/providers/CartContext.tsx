'use client'

import React, { createContext, useContext, useState } from 'react';
import { IItem } from '../lib/interfaces';

interface CartContextType {
    cartItems: IItem[];
    addItemToCart: (item: IItem) => void;
  }

  const CartContext = createContext<CartContextType | undefined>(undefined);

  export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<IItem[]>([]);
  
    const addItemToCart = (item: IItem) => {
      setCartItems((prevItems) => [...prevItems, item]);
    };
  
    return (
      <CartContext.Provider value={{ cartItems, addItemToCart}}>
        {children}
      </CartContext.Provider>
    );
  };


  export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };