import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function AuthRoute({ children }) {
  const { token } = useContext(AuthContext);

  if (token === null) {
    return null;
  }
  
  return token ? children : <Navigate to="/login" />;
}
