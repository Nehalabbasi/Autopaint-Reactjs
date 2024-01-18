import React from "react";
import Shape01 from "assets/images/shape02.png";
import Shape03 from "assets/images/shape03.png";
import Shape04 from "assets/images/shape04.png";
import GoogleLogo from "assets/images/google_logo.png";
import TestimonialImg1 from "assets/images/testimonial-01.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonial(){


		var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
		};

	return(
		<>
			<section className="testimonials_sec">
					<img className="border_box01" src={Shape01} />
					<img className="border_box02" src={Shape03}/>
					<img className="border_box03" src={Shape04}/>
					<div className="container">
						<div className="section_title">
							<h3>WHAT OUR CLIENT SAY’S</h3>
							<h1>TESTIMONIALS</h1>
						</div>
						<div className="headings">
							<h2>Excellent</h2>
							<ul>
								<li><i className='bx bxs-star'></i></li>
								<li><i className='bx bxs-star'></i></li>
								<li><i className='bx bxs-star'></i></li>
								<li><i className='bx bxs-star'></i></li>
								<li><i className='bx bxs-star'></i></li>
							</ul>
							<h4>Based on 36 reviews</h4>
							<a href="#"><img src={GoogleLogo} alt=""/></a>
						</div>
						<div className="row center">
						<Slider {...settings}>
							<div className="col-lg-4">
								<div className="testimonial_box">
									<div className="testimonial_image">
										<img src={TestimonialImg1} alt=""/>
									</div>
									<h2>Matt Crawford</h2>
									<h4>2023-07-29</h4>
									<ul>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
									</ul>
									<p>The paint for my car was perfectly matched. The service was great and the guys were really
										friendly. They even</p>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="testimonial_box">
									<div className="testimonial_image">
										<img src={TestimonialImg1} alt=""/>
									</div>
									<h2>Matt Crawford</h2>
									<h4>2023-07-29</h4>
									<ul>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
									</ul>
									<p>The paint for my car was perfectly matched. The service was great and the guys were really
										friendly. They even</p>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="testimonial_box">
									<div className="testimonial_image">
										<img src={TestimonialImg1} alt=""/>
									</div>
									<h2>Matt Crawford</h2>
									<h4>2023-07-29</h4>
									<ul>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
									</ul>
									<p>The paint for my car was perfectly matched. The service was great and the guys were really
										friendly. They even</p>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="testimonial_box">
									<div className="testimonial_image">
										<img src={TestimonialImg1} alt=""/>
									</div>
									<h2>Matt Crawford</h2>
									<h4>2023-07-29</h4>
									<ul>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
									</ul>
									<p>The paint for my car was perfectly matched. The service was great and the guys were really
										friendly. They even</p>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="testimonial_box">
									<div className="testimonial_image">
										<img src={TestimonialImg1} alt=""/>
									</div>
									<h2>Matt Crawford</h2>
									<h4>2023-07-29</h4>
									<ul>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
										<li><i className='bx bxs-star'></i></li>
									</ul>
									<p>The paint for my car was perfectly matched. The service was great and the guys were really
										friendly. They even</p>
								</div>
							</div>
						 </Slider>
						</div>
					</div>
				</section>
		</>
	);
}