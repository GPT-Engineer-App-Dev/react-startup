import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { SupabaseAuthProvider, useSupabaseAuth } from "./integrations/supabase/auth.jsx";

function PrivateRoute({ children }) {
  const { session } = useSupabaseAuth();
  return session ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <SupabaseAuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Index />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </SupabaseAuthProvider>
  );
}

export default App;