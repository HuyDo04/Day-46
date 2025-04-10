import authService from "@/services/authService";
import { PropTypes } from "prop-types";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      try {
        const data = await authService.getCurrentUser();
        setUser(data.user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  const values = {
    user,
    loading,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

// export default {
//     UserContext,
//     UserProvider,
// };

UserProvider.propTypes = {
  children: PropTypes.element,
};
