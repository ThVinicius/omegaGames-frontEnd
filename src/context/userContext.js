import { createContext, useState } from "react";

const UserContext = createContext({});

function Provider(props) {
  const [user, setUser] = useState({
    token: undefined,
    email: undefined,
    name: undefined,
    picture: undefined,
    cart: [],
    purchases: [],
    games: undefined
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, Provider };
