// CartContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Tải dữ liệu giỏ hàng từ localStorage khi ứng dụng tải lần đầu
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        else 
        {
            setCartItems([]);
        }
    }, []);

    // Cập nhật `localStorage` mỗi khi `cartItems` thay đổi
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);


     // Thêm sản phẩm vào giỏ hàng
     const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới với quantity mặc định là 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };


    // Cập nhật số lượng sản phẩm trong giỏ hàng
    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity : quantity || 1 } : item
            )
        );
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Tính tổng giá trị của giỏ hàng
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price , 0);
    };

    return (
        <CartContext.Provider value={{ cartItems,setCartItems, addToCart, updateQuantity, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook để dễ dàng sử dụng CartContext
export const useCart = () => useContext(CartContext);
