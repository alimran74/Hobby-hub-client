import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log("PrivateRoute User:", user);

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
