import AllRoutes from "./allroutes";
import { AuthProvider } from "./auth/AuthContext";
import { CartProvider } from "./service/CartContext";
function App() {
  return (
    <>
   
        <CartProvider>
        <AuthProvider>
        <AllRoutes />
        </AuthProvider>
        </CartProvider>
       
    

    </>

  );
}

export default App;
