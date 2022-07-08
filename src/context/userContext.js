import { createContext, useState } from 'react';

const UserContext = createContext({});

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5MDE4YWFlOTRhNzg1ZTBlMGQyOSIsImlhdCI6MTY1NzIzNDYyOCwiZXhwIjoxNjU3MzIxMDI4fQ.jL1n91UT1lscladxbDC_ZT6LnZ4umpw6shVCxrw_mt0';

function Provider(props) {
  const [user, setUser] = useState({
    token,
    email: undefined,
    name: undefined,
    picture: undefined,
    cart: [],
    purchases: []
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, Provider };
