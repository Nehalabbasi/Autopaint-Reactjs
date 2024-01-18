import "App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "pages/HomePage";
import Header from "component/Header";
import Footer from "component/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutPage from "pages/AboutPage";
import ShopPage from "pages/ShopPage";
import CustomColorPage from "pages/CustomColorPage";
import FaqPage from "pages/FaqPage";
import Signin from "pages/Signin";
import SignUp from "pages/SignUp";
import Cart from "pages/CartPage";
import CheckoutPage from "pages/CheckoutPage";
import ProductDetail from "pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/customcolor" element={<CustomColorPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/productdetail" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
