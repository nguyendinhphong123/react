// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SanPhamShow from './pages/SanPhamShow';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sanpham/:id" element={<SanPhamShow />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </>
  );
}

export default App;
