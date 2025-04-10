import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import config from "@/config";
import { UserContext } from "@/contexts/UserContext";
import authService from "@/services/authService";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await authService.getCurrentUser();
        console.log(data);
        setCurrentUser(data.user);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <>Loading....</>;

  if (!currentUser) {
    const path = encodeURIComponent(location.pathname);
    return (
      <Navigate
        to={`${config.routes.login}${path ? `?continue=${path}` : ""}`}
      />
    );
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element,
};

export default ProtectedRoute;
