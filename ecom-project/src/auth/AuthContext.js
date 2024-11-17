import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCart } from '../service/CartContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [userName, setUserName] = useState('');
    const [role , setRole] = useState('');
    const { setCartItems } = useCart();
    useEffect(() => {
        const storedUser = localStorage.getItem('userName');
        if (storedUser) {
            // const user = JSON.parse(storedUser);
            setIsAuth(true);
            setUserName(storedUser);
        }
    }, []);
    const SetLogInState = (username,role) => {
        setIsAuth(true);
        setUserName(username);
        setRole(role);
        localStorage.setItem('userName', JSON.stringify(username)); // Lưu thông tin người dùng vào localStorage
       
    };

    const logout = () => {
        setIsAuth(false);
        setUserName('');
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.removeItem('cart');
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        setCartItems([]);
    };

    return (
        <AuthContext.Provider value={{ isAuth, userName, SetLogInState, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
