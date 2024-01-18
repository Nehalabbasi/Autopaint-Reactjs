import React from "react";
import { Link } from "react-router-dom";

export default function CustomColor() {
  return (
    <>
      <section className="order_now">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="order_txt">
                <h4>Looking To Replicate </h4>
                <h2>a Unique or Custom Color</h2>
                <h4> For your Vehicle?</h4>
              </div>
            </div>
            <div className="col-lg-4 ct_ordbtn ">
              <Link to="/customcolor" className="theme_btn">
                Customcolor<i className="fa fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
