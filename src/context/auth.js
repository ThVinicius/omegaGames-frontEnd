import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    token: undefined,
    email: undefined,
    name: undefined,
    picture: undefined,
    cart: [],
    purchases: [],
    games: undefined,
  });

  const [navbarCart, setNavbarCart] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        navbarMenu,
        setNavbarMenu,
        navbarCart,
        setNavbarCart,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
