import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterScreen from "./register/main/RegisterScreen";
import Login from "./login/Login";
import HomeScreen from "./home/main/HomeScreen";
import LibScreen from "./lib/main/LibScreen";
import SucessScreen from "./sucess/main/SucessScreen";
import NavBarCart from "./navbar/Cart";
import NavBarMenu from "./navbar/Menu";
import { useAuth } from "../context/auth";
import ResetCSS from "../assets/css/reset";
import GlobalStyle from "../assets/css/global";

export default function App() {
  const { navbarMenu, navbarCart } = useAuth();
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      {(navbarMenu.value && <NavBarMenu />) ||
        (navbarCart.value && <NavBarCart />)}
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/lib" element={<LibScreen />} />
        <Route path="/sucess" element={<SucessScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
