import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
const baseUrl = "http://localhost:3000/";

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const saveUser = async (user) => {
    setToken(user.token);
    localStorage.setItem("token", user.token);
  };

  const removeUser = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const logout = async () => {
    removeUser();
  };

  return (
    <AuthContext.Provider value={{ token, saveUser, removeUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
