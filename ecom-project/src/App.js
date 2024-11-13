import AllRoutes from "./allroutes";
import { AuthProvider } from "./auth/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>

    </>

  );
}

export default App;
