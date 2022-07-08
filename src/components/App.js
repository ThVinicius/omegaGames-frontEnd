import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterScreen from './register/main/RegisterScreen';
import HomeScreen from './home/main/HomeScreen';
import { Provider } from '../context/userContext';
import ResetCSS from '../assets/css/reset';
import GlobalStyle from '../assets/css/global';

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <Provider>
        <Routes>
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
