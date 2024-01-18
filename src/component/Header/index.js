import React from "react";
import Logo from "assets/images/logo.png";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import ShopPage from "pages/ShopPage";
import CartPage from "pages/CartPage";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header id="ct_top" className="header-main page-header">
        <div className="top-bar d-none d-lg-block">
          <div className="row">
            <div className="col-lg-5">
              <marquee behavior="smooth" direction="right">
                <span>FREE SHIPPING! (SOME RESTRICTIONS APPIS)</span>
                <span>FREE SHIPPING! (SOME RESTRICTIONS APPIS)</span>
                <span>FREE SHIPPING! (SOME RESTRICTIONS APPIS)</span>
                <span>FREE SHIPPING! (SOME RESTRICTIONS APPIS)</span>
              </marquee>
            </div>
            <div className="col-lg-2">
              <div className="call_icon">
                <a href="#">
                  <span>Call Us</span>
                  <i className="fa fa-phone"></i>
                  631-392-1080
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <marquee behavior="smooth" direction="right">
                <span>FREE SHIPPING! (SOME RESTRICTIONS APPIS)</span>
                <span>FREE SHIPPING! (SOME RESTRICTIONS APPIS)</span>
                <span>FREE SHIPPING! (SOME RESTRICTIONS APPIS)</span>
                <span>FREE SHIPPING! (SOME RESTRICTIONS APPIS)</span>
              </marquee>
            </div>
          </div>
        </div>
        <div className="nav-area-full">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="logo">
                  <img src={Logo} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="searching_bar_add_cart">
                  <div className="search_products">
                    <input type="text" placeholder="Search for paint code" />
                    <span>
                      <i className="bx bx-search"></i>
                    </span>
                  </div>
                  <div className="login_register">
                  <Link to="/sign-in">Login / Register</Link>
                  <Link to="/cart">
                      $0.00
                      <span>
                        <i className="bx bxs-shopping-bag"></i>
                      </span>
                      </Link>
                  </div>
                </div>
                <ul className="navigation">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">PAINT BY MANUFACTURER</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li className="dropDrown">
                    <a href="#">
                      Specialty Paints<i className="bx bx-chevron-down"></i>
                    </a>
                    <ul className="subdropdown">
                      <li>
                        <Link to="/shop">Pearls</Link>
                      </li>
                      <li>
                        <Link to="/shop">Candy Pearls</Link>
                      </li>
                      <li>
                        <Link to="/shop">Metal Flake</Link>
                      </li>
                      <li>
                        <Link to="/shop">Ready to Spray Base Coats</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/shop">PAINT SUPPLIES</Link>
                  </li>
                  <li>
                    <Link to="/shop">CLEARANCE</Link>
                  </li>
                  <li>
                    <Link to="/shop">CUSTOMER PROJECTS</Link>
                  </li>
                  <li>
                    <Link to="/faq">HOW TO VIDEOS</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
