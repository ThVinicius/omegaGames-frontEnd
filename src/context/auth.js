import { createContext, useState } from "react";

const UserContext = createContext({});

const AuthProvider = (props) => {
  const [user, setUser] = useState({ token: undefined });
  const [navBar, setNavBar] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, navBar, setNavBar }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, AuthProvider };
