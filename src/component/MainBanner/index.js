import React from "react";
import BannerImage from "assets/images/banner_main.png";
import CustomLogo from "assets/images/logo-custom.png";

export default function MainBanner() {
  return (
    <>
      <section id="banner" className="banner_main">
        <div className="socails_icons_main">
          <h2>Follow Us</h2>
          <span>
            <i className="fa fa-facebook"></i>
          </span>
          <span>
            <i className="fa fa-twitter"></i>
          </span>
          <span>
            <i className="fa fa-youtube-play"></i>
          </span>
          <span>
            <i className="fa fa-instagram"></i>
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="banner_text">
                {/* <a href="#"><img src={CustomLogo} alt=""/></a> */}
                <h2>Factory Matched or Custom</h2>
                <h2>Automotive Paints and Supplies</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="car_paint_filters">
                <h3>Search Your Car Paint </h3>
                <div className="filters_selection">
                  <form action="#">
                    <select name="" id="">
                      <option value="">Year 2014</option>
                      <option value="">Year 2015</option>
                      <option value="">Year 2016</option>
                      <option value="">Year 2017</option>
                    </select>
                    <select name="" id="">
                      <option value="">Make</option>
                      <option value="">Make</option>
                      <option value="">Make</option>
                      <option value="">Make</option>
                    </select>
                    <select name="" id="">
                      <option value="">Model</option>
                      <option value="">Model</option>
                      <option value="">Model</option>
                      <option value="">Model</option>
                    </select>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="--Enter Code--"
                        aria-label="--Enter Code--"
                        aria-describedby="search-btn"
                      />
                    </div>
                  </form>
                </div>
                <div className="submit_btn">
                  <button type="submit">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_image">
          <img src={BannerImage} alt="" />
        </div>
      </section>
    </>
  );
}
