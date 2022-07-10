import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterScreen from "./register/main/RegisterScreen";
import HomeScreen from "./home/main/HomeScreen";
import LibScreen from "./lib/main/LibScreen";
import SucessScreen from "./sucess/main/SucessScreen";
import { AuthProvider } from "../context/auth";
import ResetCSS from "../assets/css/reset";
import GlobalStyle from "../assets/css/global";

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/lib" element={<LibScreen />} />
          <Route path="/sucess" element={<SucessScreen />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
