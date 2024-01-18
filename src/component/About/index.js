import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutImage from "assets/images/aboutimg_img_copy2.png";
import Service01 from "assets/images/service01.png";
import Service02 from "assets/images/service02.png";
import Service03 from "assets/images/service03.png";
import { Link } from 'react-router-dom';





export default function About(){
	var Scroll = {
		slidesToShow: 3,
		slidesToScroll: 1
	  };

	return(
		<>
		 <section className="about_sec">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="about_txt">
							<h3>ABOUT THE AUTO</h3>
							<h2>PAINT DEPOT</h2>
							<p>At The Auto Paint Depot, we pride ourselves on delivering unmatched quality in touch-up paints
								for vehicles.
								Harnessing advanced technology, we ensure perfect color matches every time. Whether you re an
								auto professional
								or a DIY enthusiast, our superior products have been making vehicles shine anew for decades.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
								labore et
								dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
								<Link className="theme_btn" to="/about">Read More<i className="fa fa-long-arrow-right"></i></Link>
								
						</div>
					</div>
					<div className="col-lg-6">
						<div className="about_img">
							<img src={AboutImage} alt="" className="img-fluid"/>
						</div>
					</div>
					<div className="section_title">
						<h3>WHAT WE SERVE?</h3>
						<h2>our services</h2>
					</div>
					<a href="#" className="view_all_service">view all service</a>
					<div className="row one-time">
					 <Slider {...Scroll}>
						<div className="col-lg-3">
							<div className="service_slide_box">
								<div className="service_slider_image">
									<img src={Service01} alt=""/>
								</div>
								<div className="service_slider_text">
									<h2>BASECOAT</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididut
										dolore mag</p>
									<a href="#">Read More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="service_slide_box">
								<div className="service_slider_image">
								 <img src={Service01} alt=""/>
								</div>
								<div className="service_slider_text">
									<h2>BASECOAT</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididut
										dolore mag</p>
									<a href="#">Read More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="service_slide_box">
								<div className="service_slider_image">
								<img src={Service02} alt=""/>
								</div>
								<div className="service_slider_text">
									<h2>CLEARCOATS</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididut
										dolore mag</p>
									<a href="#">Read More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="service_slide_box">
								<div className="service_slider_image">
								<img src={Service03} alt=""/>
								</div>
								<div className="service_slider_text">
									<h2>Metal Flake</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididut
										dolore mag</p>
									<a href="#">Read More</a>
								</div>
							</div>
						</div>
					 </Slider>
					</div>
				</div>
			</div>
		</section>
		<section className="watch_video_sec">
		<div className="container">
		<div className="watch_video_txt">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elied do eiusmod tempor incididunt ut labore
                        et dolore mag
                        na alienim 123 456 7891</p>
                    <a href="#" className="theme_btn">View All Services<i className="fa fa-long-arrow-right"></i></a>
            </div>
		</div>
	</section>
		</>
	);
}