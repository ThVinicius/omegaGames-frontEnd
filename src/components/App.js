import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterScreen from './register/main/RegisterScreen'
import ResetCSS from '../assets/css/reset'
import GlobalStyle from '../assets/css/global'

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
