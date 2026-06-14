import React, { useEffect } from 'react'; // Added useEffect
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'; // Added useLocation
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop'; 
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';
import Footer from './components/Footer/Footer';
import MensBanner from './assets/MensBanner.png';
import WomensBanner from './assets/WomensBanner.png';
import KidsBanner from './assets/KidsBanner.png';

// Component to handle scroll restoration on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop /> {/* Instantly scrolls to the top on every page change */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Mens" element={<ShopCategory banner={MensBanner} category="Mens" />} />
          <Route path="/Womens" element={<ShopCategory banner={WomensBanner} category="Womens" />} />
          <Route path="/Kids" element={<ShopCategory banner={KidsBanner} category="Kids" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
};

export default App;