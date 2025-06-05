import { CartItem } from "@/types/cartItem";
import { Item } from "@/types/Item";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({
  cartItems: {} as Record<string, CartItem>,
  addItemToCart: (item: Item) => {},
  removeItemFromCart: (item: Item) => {},
  totalItem: 0,
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItem] = useState<Record<string, CartItem>>({});
  const [totalItem, setTotalItem] = useState<number>(0);

  const getTotalItems = () => {
    const totalItemInCart = Object.values(cartItems).reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0,
    );
    setTotalItem(totalItemInCart);
  };

  useEffect(() => {
    getTotalItems();
  }, [cartItems]);

  const addItemToCart = (item: Item) => {
    setCartItem((prevCartItems) => {
      const newCart = { ...prevCartItems };

      if (newCart[item.id]) {
        newCart[item.id] = {
          ...newCart[item.id],
          quantity: newCart[item.id].quantity + 1,
        };
      } else {
        newCart[item.id] = { item, quantity: 1 };
      }

      return newCart;
    });
  };

  const removeItemFromCart = (item: Item) => {
    setCartItem((prevCartItems) => {
      const newCart = { ...prevCartItems };
      const itemQuantity = newCart[item.id].quantity;
      if (itemQuantity > 1) {
        newCart[item.id] = {
          ...newCart[item.id],
          quantity: newCart[item.id].quantity - 1,
        };
      } else {
        delete newCart[item.id];
      }
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, totalItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
