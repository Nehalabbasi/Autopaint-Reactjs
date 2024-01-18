import React from "react";
import Logo from "assets/images/logo.png";
import FooterBrand from "assets/images/brands_imgs.png";
import FooterArrow from "assets/images/uparrow.png";

export default function Footer() {
  return (
    <>
      <footer className="footer-main">
        <div className="ftr_newslatter">
          <div className="container">
            <div className="ftr_news_txt">
              <div>
                <h3>JOIN OUR NEWSLETTER</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div>
                <form action="">
                  <input type="text" />
                  <button type="submit" placeholder="Enter Your Email">
                    <i className="bx bxs-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3 address-main">
                <div className="lgoo">
                  <a href="/">
                    <img src={Logo} alt="" />
                  </a>
                  <p>
                    At The Auto Paint Depot, we pride ourselves on delivering
                    unmatched quality in touch-up paints for vehicles
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook"></i>facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter"></i>Tweeter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram"></i>Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 ct_ftr_navi">
                <div>
                  <h4>Quick Links</h4>
                  <ul className="footer-nav">
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">Touch up paint</a>
                    </li>
                    <li>
                      <a href="">Products</a>
                    </li>
                    <li>
                      <a href="">Clearence blowout</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>Services</h4>
                  <ul className="footer-nav">
                    <li>
                      <a href="">DIY</a>
                    </li>
                    <li>
                      <a href="">Swag</a>
                    </li>
                    <li>
                      <a href="">Clear Coats</a>
                    </li>
                    <li>
                      <a href="">Metal Flake</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-2">
                <h4>Policies</h4>
                <ul className="footer-nav">
                  <li>
                    <a href="">Refund</a>
                  </li>
                  <li>
                    <a href="">Shipping</a>
                  </li>
                  <li>
                    <a href="">Cookie </a>
                  </li>
                  <li>
                    <a href="">Returns </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-3">
                <h2> 631-392-1080</h2>
                <a href="#">Email: dcs0903@gmail.com</a>
                <p>The Auto Paint Depot Inc. 9 Connor Lane Unit A, UNIT A</p>
                <a href="#">
                  <i className="fa fa-map-marker"></i>Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="brand_div">
                  <img src={FooterBrand} alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <p className="copyright">
                  © All Rights Reserved <span> Auto paint Depot 2023</span>
                </p>
              </div>
              <div className="col-sm-6">
                <p className="terms_value">
                  CALIFORNIA PROPOSITION 65 WARNING: Cancer and Reproductive
                  Harm
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="backtotop" Title="back to Top">
          <a href="#ct_top">
            <img src={FooterArrow} alt="" />
          </a>
        </div>
      </footer>
    </>
  );
}
