import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [userName, setUserName] = useState('');
    const [role , setRole] = useState('');

    const SetLogInState = (username,role) => {
        setIsAuth(true);
        setUserName(username);
        setRole(role);
    };

    const logout = () => {
        setIsAuth(false);
        setUserName('');
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    };

    return (
        <AuthContext.Provider value={{ isAuth, userName, SetLogInState, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
