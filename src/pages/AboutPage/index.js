import React from "react";
import AboutMainImage from "assets/images/aboutpg_banner.png";
import SecondSecImg from "assets/images/aboutpg_section_banner.png";
import Testimonial from "component/Testimonials";

export default function AboutPage() {
  return (
    <>
      <section class="about_banner">
        <div class="inner-pg_Banner">
          <img src={AboutMainImage} alt="" />
        </div>
        <div class="container">
          <div class="aboutinner_txt">
            <h2>ABOUT US</h2>
            <p>
              At The Auto Paint Depot, we pride ourselves on delivering
              unmatched quality in touch-up paints for vehicles. Harnessing
              advanced technology, we ensure perfect color matches every time.
              Whether you’re an auto professional or a DIY enthusiast, our
              superior products have been making vehicles shine anew fort
              decades.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis
            </p>
            <div>
              <h3>Precision Matchs</h3>
              <p>
                Advanced technology ensures a flawless match for any vehicle’s
                paint formula and code.
              </p>
            </div>
            <div>
              <h3>From Vintage to Modern</h3>
              <p>
                Offering touch-up paints for cars and motorcycles dating from
                1940 to today.
              </p>
            </div>
            <div>
              <h3>From Vintage to Modern</h3>
              <p>
                From 0.5 oz bottles for quick touch-ups to supplies for larger
                projects, we cater to all needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="utlimate_paint">
        <div class="ultimate_banner">
          <img src={SecondSecImg} alt="" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-5 offset-sm-5">
              <div class="utlimate_txt">
                <h2>
                  THE ULTIMATE PAINT <br /> MATCH SOLUTION
                </h2>
                <p>
                  Every vehicle deserves its unique shade. At The Auto Paint
                  Depot, we’re not just sellers; we’re leading providers in
                  automotive paint. No more approximations – our
                  state-of-the-art technology ensures each touch up paint
                  matches the vehicle’s formula and code perfectly. From minute
                  touch-ups with our 0.5 oz bottles to grand-scale projects,
                  trust in our products to rejuvenate your vehicle.
                </p>
                <p>
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="order_now">
        <div class="container">
          <div class="order_txt">
            <h4>Looking To Replicate </h4>
            <h2>a Unique or Custom Color</h2>
            <h4> For your Vehicle?</h4>
          </div>
          <div class="Order_form">
            <div class="form-side">
              <div class="form-head">
                <p>High quality automotive paint</p>
                <strong>Order Now</strong>
                <span>it's easy as 1-2-3</span>
              </div>
              <div class="form-body">
                <p>
                  Select a make, year and model to show available paint colors
                  for your car.
                </p>
                <form>
                  <label>1. Year</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label>2. Make</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Make</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label>3. Model</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Model</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button type="button" class="btn-style btn-orange">
                    Search
                  </button>
                </form>
              </div>

              <div class="form-footer">
                <strong>Know your code?</strong>
                <p>search by a specific color code</p>
                <form>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="--Enter Code--"
                      aria-label="--Enter Code--"
                      aria-describedby="search-btn"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="search-btn"
                    >
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </form>
                <p>
                  Need help? if you cant find the right color please{" "}
                  <a href="#">click here to contact us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
    </>
  );
}
