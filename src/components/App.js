import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterScreen from "./register/main/RegisterScreen";
import ResetCSS from "../assets/css/reset";
import GlobalStyle from "../assets/css/global";
import Login from "./login/Login";
import { useState } from "react";
import UserContext from "../context/UserContext";


export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <ResetCSS />
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
