import React from "react";
import ProImage07 from "assets/images/product/pro07.png";
import { Link } from "react-router-dom";


export default function ProductDetail() {
  return (
    <>
		<section className="cart_sec_bg  product-detail">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="product-image">
						<div className="product-img">
							<img src={ProImage07} alt=""/>
						</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="product-pricing">
						<h3>Product Name   </h3>
						<div className="rating">
							<ul>
								<li><i className="fa fa-star" aria-hidden="true"></i></li>
								<li><i className="fa fa-star" aria-hidden="true"></i></li>
								<li><i className="fa fa-star" aria-hidden="true"></i></li>
								<li><i className="fa fa-star" aria-hidden="true"></i></li>
								<li><i className="fa fa-star" aria-hidden="true"></i></li>
							</ul>
						</div>
						<div className="pricing">
							<h3><span>$20.00</span> $20.00  </h3>
						</div>
						<div className="discription">
							<strong>Product Description</strong>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							<p></p>
						</div>
						<div className="shop-btn">
							<Link to="/cart" className="theme_btn">Add to cart<i class="bx bxs-shopping-bag"></i></Link>
						</div>
						</div>
					</div>
				</div>
			</div>
			</section>
    </>
  );
}
