import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterScreen from "./register/main/RegisterScreen";
import ResetCSS from "../assets/css/reset";
import GlobalStyle from "../assets/css/global";
import Login from "./login/Login";
import NavBarCart from "./navbar/Cart";
import NavBarMenu from "./navbar/Menu";
import HomeScreen from "./home/main/HomeScreen";
import { useAuth } from "../context/auth";

export default function App() {
  const { navbarMenu, navbarCart } = useAuth();

  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      {navbarMenu && <NavBarMenu /> || navbarCart && <NavBarCart />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
