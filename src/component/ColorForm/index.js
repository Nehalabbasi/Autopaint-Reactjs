import React from "react";

export default function ColorForm() {
  return (
    <>
      <section class="form_custom">
        <div class="container">
          <div class="head">
            <h2>Submitting your Sample</h2>
            <p>
              The best way to get the process started is by submitting a request
              using the form below. Once your request is received, we will add
              your request to our queue of expected deliveries. This will help
              us respond more quickly once your part or sample arrives.
            </p>
            <h3>Color Matching Service</h3>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="theme_formGroup">
                <label> Email</label>
                <input type="email" />
              </div>
            </div>
            <div class="col-lg-5">
              <div class="theme_formGroup">
                <label> Company name</label>
                <input type="name" />
              </div>
            </div>
            <div class="col-lg-5">
              <div class="theme_formGroup">
                <label>First name</label>
                <input type="name" />
              </div>
            </div>
            <div class="col-lg-5">
              <div class="theme_formGroup">
                <label> Last name</label>
                <input type="name" />
              </div>
            </div>
            <div class="col-lg-5">
              <div class="theme_formGroup">
                <label> Phone number</label>
                <input type="name" />
              </div>
            </div>
            <div class="col-lg-5">
              <div class="theme_formGroup btn_radio">
                <h2>Contact Type*</h2>
                <label for="business">
                  <input id="business" type="radio" />
                  <span>Business</span>
                </label>
                <label for="homeuse">
                  <input id="homeuse" type="radio" />
                  <span>Home Use</span>
                </label>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="theme_formGroup btn_radio">
                <h2>
                  Which Custom Color Matching Service(s) are you interested in?
                </h2>
                <label for="business2">
                  <input id="business2" type="checkbox" />
                  <span>Spray Paint or Touch Up ($175)</span>
                </label>
                <label for="homeuse2">
                  <input id="homeuse2" type="checkbox" />
                  <span>Specialty ($200-$400+)</span>
                </label>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="theme_formGroup">
                <label>Number of Colors</label>
                <p>How many different colors will you need matched?</p>
                <input type="number" />
              </div>
            </div>
            <div class="col-lg-5">
              <div class="theme_formGroup btn_radio">
                <h2>Product Type</h2>
                <label for="business3">
                  <input id="business3" type="checkbox" />
                  <span>Spray Paint</span>
                </label>
                <label for="homeuse3">
                  <input id="homeuse3" type="checkbox" />
                  <span>Paint Pens</span>
                </label>
                <label for="homeuse4">
                  <input id="homeuse4" type="checkbox" />
                  <span>Brush in Cap Bottles</span>
                </label>
                <label for="homeuse5">
                  <input id="homeuse5" type="checkbox" />
                  <span>Cans (pint, quart, gallons, etc)</span>
                </label>
                <label for="homeuse6">
                  <input id="homeuse6" type="checkbox" />
                  <span>Other</span>
                </label>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="theme_formGroup">
                <h2>Additional information about your Custom Color Match?*</h2>
                <textarea></textarea>
              </div>
            </div>
            <div class="col-lg-10">
              <div class="theme_formGroup">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
