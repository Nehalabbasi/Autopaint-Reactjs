import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Auto1 from "assets/images/auto01.png";
import Auto2 from "assets/images/auto02.png";
import Auto3 from "assets/images/auto03.png";
import Auto4 from "assets/images/auto04.png";
import UsaTag from "assets/images/usatag.png";

export default function ProjectSize() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <section class="best_automative">
        <div class="section_title">
          <h2>
            We can mix your <span>Paint for any size project</span>
          </h2>
        </div>
        <div class="container">
          <div className="row">
            <Slider {...settings}>
              <div className="col-lg-4">
                <div class="automative_box">
                  <img src={Auto2} alt="" />
                  <h2>Brush-In Bottles</h2>
                  <ul>
                    <li>
                      <a href="#">Base Coat</a>
                    </li>
                    <li>
                      <a href="#">Clear Coat</a>
                    </li>
                    <li>
                      <a href="#">Primer</a>
                    </li>
                    <li>
                      <a href="#">Adhesion</a>
                    </li>
                    <li>
                      <a href="#">Promoter</a>
                    </li>
                  </ul>
                  <img src={UsaTag} alt="" class="usa_bage" />
                </div>
              </div>
              <div className="col-lg-4">
                <div class="automative_box">
                  <img src={Auto2} alt="" />
                  <h2>Brush-In Bottles</h2>
                  <ul>
                    <li>
                      <a href="#">Base Coat</a>
                    </li>
                    <li>
                      <a href="#">Clear Coat</a>
                    </li>
                    <li>
                      <a href="#">Primer</a>
                    </li>
                    <li>
                      <a href="#">Adhesion</a>
                    </li>
                    <li>
                      <a href="#">Promoter</a>
                    </li>
                  </ul>
                  <img src={UsaTag} alt="" class="usa_bage" />
                </div>
              </div>
              <div className="col-lg-4">
                <div class="automative_box">
                  <img src={Auto2} alt="" />
                  <h2>Brush-In Bottles</h2>
                  <ul>
                    <li>
                      <a href="#">Base Coat</a>
                    </li>
                    <li>
                      <a href="#">Clear Coat</a>
                    </li>
                    <li>
                      <a href="#">Primer</a>
                    </li>
                    <li>
                      <a href="#">Adhesion</a>
                    </li>
                    <li>
                      <a href="#">Promoter</a>
                    </li>
                  </ul>
                  <img src={UsaTag} alt="" class="usa_bage" />
                </div>
              </div>
              <div className="col-lg-4">
                <div class="automative_box">
                  <img src={Auto2} alt="" />
                  <h2>Brush-In Bottles</h2>
                  <ul>
                    <li>
                      <a href="#">Base Coat</a>
                    </li>
                    <li>
                      <a href="#">Clear Coat</a>
                    </li>
                    <li>
                      <a href="#">Primer</a>
                    </li>
                    <li>
                      <a href="#">Adhesion</a>
                    </li>
                    <li>
                      <a href="#">Promoter</a>
                    </li>
                  </ul>
                  <img src={UsaTag} alt="" class="usa_bage" />
                </div>
              </div>
              <div className="col-lg-4">
                <div class="automative_box">
                  <img src={Auto2} alt="" />
                  <h2>Brush-In Bottles</h2>
                  <ul>
                    <li>
                      <a href="#">Base Coat</a>
                    </li>
                    <li>
                      <a href="#">Clear Coat</a>
                    </li>
                    <li>
                      <a href="#">Primer</a>
                    </li>
                    <li>
                      <a href="#">Adhesion</a>
                    </li>
                    <li>
                      <a href="#">Promoter</a>
                    </li>
                  </ul>
                  <img src={UsaTag} alt="" class="usa_bage" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
