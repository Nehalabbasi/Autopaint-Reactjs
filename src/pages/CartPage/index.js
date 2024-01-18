import React from "react";
import Cart from "assets/images/add-cartproduct.png";
import PaypalImage from "assets/images/paypal_brand.png";
import { Link } from "react-router-dom";


export default function ShopPage() {
  return (
    <>
    <section className="cart_sec_bg">
	<div className="container">
		<div className="row gx-5 justify-content-end">
			<div className="col-lg-8">
				<div className="carrt_rows">
				 <table className="table">
					<thead>
						<tr>
							<th scope="col">ITEM</th>
							<th scope="col">QUANTITY</th>
							<th scope="col">UNIT PRICE</th>
							<th scope="col">SUB PRICE</th>
							<th></th>
						</tr>
					  </thead>
					  <tbody>
							<tr>
								<td>
								<div className="main_addcart d-flex">	
									<div className="add-product-img">
										<img src={Cart}  />
									</div>
									<div className="add-cart_txt">
										<h2>IPSUM DOLOR</h2>
										<h2>GRAM: 25</h2>
										<h2>30 REVIEWS</h2>
									</div>
								</div>
								</td>
								<td>
								<div className="cart_update_quantity">
									<input value="2" type="number"/>
									<a href="#">Update Cart</a>
								</div>
								</td>
								<td><p>$22</p></td>
								<td><p>$44</p></td>
								<td><a href="#" className="remove_cart">X</a></td>
							</tr>
							<tr>
								<td>
								<div className="main_addcart d-flex">	
									<div className="add-product-img">
									  <img src={Cart}  />
									</div>
									<div className="add-cart_txt">
										<h2>IPSUM DOLOR</h2>
										<h2>GRAM: 25</h2>
										<h2>30 REVIEWS</h2>
									</div>
								</div>
								</td>
								<td>
								<div className="cart_update_quantity">
									<input value="2" type="number"/>
									<a href="product.php">Update Cart</a>
								</div>
								</td>
								<td><p>$22</p></td>
								<td><p>$44</p></td>
								<td><a href="#" className="remove_cart">X</a></td>
							</tr>
					  </tbody>
					</table>
				</div>
				<div className="checkout_method_main">
					<div className="continue_purchasing">
						<a href="#">Continue Purchasing</a>
					</div>
					<div className="proceeed_checkout_main">
						<Link to="/checkout" >Proceed To Checkout</Link>
						<a href="#" className="checkout_with_paypal">
							<span>Or Checkout With</span>
							<img src={PaypalImage} alt=""/>
						</a>
					</div>
				</div>
			</div>
			<div className="col-lg-3">
				<div className="total_sub_product">
					<div className="subTotal">
						<h5>Sub Total</h5>
						<p>$76</p>
					</div>
					<div className="subTotal">
						<h5>Discount</h5>
						<p>$10</p>
					</div>
					<div className="subTotal">
						<h5>Shipping</h5>
						<p>$76</p>
					</div>
					<div className="subTotal">
						<h5>Total</h5>
						<p>$76</p>
					</div>
				</div>
				<div className="total_sub_product">
				   <div className="subTotal">
					<h5>Shipping</h5>
				   </div>
				   <div className="subTotal">
					<h5>Courirer ($15)</h5>
				   </div>
				   <div className="subTotal">
					<h5>Estimate For <br/>United Estate,Ny,1230</h5>
				   </div>
				</div>
			</div>
		</div>	
	</div>
</section>
    </>
  );
}
