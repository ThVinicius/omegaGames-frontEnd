import { createContext, useState } from 'react';

const UserContext = createContext({});

function Provider(props) {
  const [user, setUser] = useState({ token: undefined, cart: [] });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, Provider };
