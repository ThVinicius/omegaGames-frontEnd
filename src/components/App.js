import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/auth";
import RegisterScreen from "./register/main/RegisterScreen";
import ResetCSS from "../assets/css/reset";
import GlobalStyle from "../assets/css/global";
import Login from "./login/Login";
import Home from "./home/Home";
import NavBarCart from "./navbar/Cart";
import NavBarMenu from "./navbar/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<NavBarCart />} />
          <Route path="/menu" element={<NavBarMenu />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
