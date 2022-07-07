import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/auth'
import RegisterScreen from './register/main/RegisterScreen'
import ResetCSS from '../assets/css/reset'
import GlobalStyle from '../assets/css/global'
import Login from './login/Login'
import Home from './home/Home'

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
