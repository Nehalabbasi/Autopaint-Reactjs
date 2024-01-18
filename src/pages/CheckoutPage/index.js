import React from "react";
import { Link } from "react-router-dom";


export default function CheckoutPage() {
  return (
    <>
   <section className="cart_sec_bg ">
	<div className="container">
		<div className="checkout_heading" >
			<h2>Check Out</h2>
		</div>
		<form id="checkoutform">
			<div className="row ct_checkout_form">
			<div className="col-md-8">
				<div className="checkout-form ">
				<h3 className="mc-b-2">Billing Detail</h3>
				<div className="row">
					<div className="col-md-6">
					<div className="form-group my-1">
						<label for="">First Name <span> *</span>
						</label>
						<input type="text" className="form-control" name="first_name"/>
					</div>
					</div>
					<div className="col-md-6">
					<div className="form-group my-1">
						<label for="">Second Name <span> *</span>
						</label>
						<input type="text" className="form-control" name="last_name"/>
					</div>
					</div>
					<div className="col-md-12">
					<div className="form-group my-1">
						<label for="">Address <span> *</span>
						</label>
						<input type="text" className="form-control" placeholder="Street Address" name="address"/>
						<input type="text" className="form-control mc-t-2" placeholder="Apartment. suite, unite ect ( optinal )"/>
					</div>
					</div>
					<div className="col-md-12">
					<div className="form-group my-1">
						<label for="">Town/City <span> *</span>
						</label>
						<input type="text" className="form-control" name="city"/>
					</div>
					</div>
					<div className="col-md-12">
					<div className="form-group my-1">
						<label for="">Country/State <span> *</span>
						</label>
						<input type="text" className="form-control" name="country"/>
					</div>
					</div>
					<div className="col-md-12">
					<div className="form-group my-1">
						<label for="">Postcode/Zip <span> *</span>
						</label>
						<input type="text" className="form-control" name="post_code"/>
					</div>
					</div>
					<div className="col-md-6">
					<div className="form-group my-1">
						<label for="">Phone <span> *</span>
						</label>
						<input type="text" className="form-control" name="phone_number"/>
					</div>
					</div>
					<div className="col-md-6">
					<div className="form-group my-1">
						<label for="">Email <span> *</span>
						</label>
						<input type="email" className="form-control" name="email"/>
					</div>
					</div>
					<div className="col-md-12">
					<div className="form-group  ct_checkBox">
						<input type="checkbox" id="createe_acount" />
						<div>
							<label for="createe_acount">Create an acount?</label>
							<p>Create am acount by entering the information below. If you are a returing customer login at the top of the page</p>
						</div>
					</div>
					</div>
					<div className="col-md-12">
					<div className="form-group my-1">
						<label for="">Account Password <span> *</span>
						</label>
						<input type="text" className="form-control"/>
						<div className="ct_checkBox12" > 
							<input type="checkbox" id="note1"/>
							<label for="note1">Note about your order, e.g, special noe for delivery</label>
						</div>
					</div>
					</div>
					<div className="col-md-12">
					<div className="form-group my-1">
						<label for="">Order Notes <span> *</span>
						</label>
						<input type="text" className="form-control" placeholder="Note about your order, e.g, special noe for delivery" name="notes"/>
					</div>
					</div>
				</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="checkout-order">
				<h3 className="mc-b-2">Your Order</h3>
				<div className="checkout-product-total">
					<div className="pro-total-thumbanil mc-b-2">
					<h4>Product</h4>
					<h4>Total</h4>
					</div>
					<div className="pro-total-thumbanil mc-b-2">
					<p>Product Name</p>
					<p>$</p>
					</div>
				</div>
				<div className="subtotal-sec checkout-product-total">
					<div className="pro-total-thumbanil mc-b-2 mc-t-2">
					<p>Subtotal</p>
					<h4>$ 0</h4>
					<input type="hidden" name="total" value="0"/>
					</div>
					<div className="pro-total-thumbanil">
					<p>Total</p>
					<h4 className="color-primary">$ 0</h4>
					</div>
				</div>
				<div className="checkout-payment-sec">
					<div className="checkbox-sec">
					<input type="checkbox" id="account1"/>
					<label for="account1"> Create An Account</label>
					</div>
					<p>Create am acount by entering the inform- ation below. If you are a returing customer login at the top of the page.</p>
					<div className="checkbox-sec">
					<input type="checkbox" id="account"/>
					<label for="account"> Cheque Payment</label>
					</div>
					<div className="checkbox-sec">
					<input type="checkbox" id="account2"/>
					<label for="account2"> Paypal</label>
					</div>
					<div className="submit_btn">
								<button type="submit">Place Order</button>
					</div>
				</div>
				</div>
			</div>
			</div>
		</form>
	</div>
   </section>
    </>
  );
}
