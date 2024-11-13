// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element, rolesAllowed }) {
    const role = localStorage.getItem("role"); // Lấy vai trò từ localStorage

    if (!rolesAllowed.includes(role)) {
        // Nếu vai trò không nằm trong danh sách cho phép, điều hướng đến trang 404 hoặc login
        return <Navigate to="/login" replace />;
    }

    return element;
}

export default PrivateRoute;
