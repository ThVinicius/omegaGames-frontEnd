import { render } from "react-dom";
import App from "./components/App";
import { AuthProvider } from "./context/authContext";

render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.querySelector(".root")
);
