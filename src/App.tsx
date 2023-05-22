import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import LoginByEmail from "./pages/Login/LoginByEmail";
import Header from "./pages/Home/component/Header";
import Footer from "./pages/Home/component/Footer";
import Market from "./pages/Market";

function App() {
  return (
      <div className="container-fluid">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/email" element={<LoginByEmail />} />
          </Routes>
      </div>
  );
}
export default App;
