import React from "react";
import Shape05 from "assets/images/shape05.png";
import Shape06 from "assets/images/shape06.png";
import Blog01 from "assets/images/blog01.png";
import Blog02 from "assets/images/blog02.png";
import Blog03 from "assets/images/blog03.png";



export default function Blog(){
	return(
		<>
		 <section class="blog_section">
				<img class="shape_05" src={Shape05}/>
				<img class="shape_06" src={Shape06}/>
				<div class="container">
					<div class="heading_section">
						<div>
							<h3>Latest News & Articles</h3>
							<h2>BLOGS</h2>
						</div>
						<a href="#" class="theme_btn">Read More<i class="fa fa-long-arrow-right"></i></a>
					</div>
					<div class="row">
						<div class="col-lg-4">
							<div class="blog_main">
								<div class="blog_image">
									<img src={Blog01} alt=""/>
								</div>
								<div class="blog_txt">
									<div class="date_blog_">
										<a href="#"><i class='bx bxs-calendar'></i>OCT 08,2023</a>
										<a href="#"><i class='bx bxs-user'></i>Admin</a>
									</div>
									<h2>PRESERVE YOUR RIDE: FA…</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="blog_main">
								<div class="blog_image">
									<img src={Blog02} alt=""/>
								</div>
								<div class="blog_txt">
									<div class="date_blog_">
										<a href="#"><i class='bx bxs-calendar'></i>OCT 08,2023</a>
										<a href="#"><i class='bx bxs-user'></i>Admin</a>
									</div>
									<h2>PRESERVE YOUR RIDE: FA…</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="blog_main">
								<div class="blog_image">
									<img src={Blog03} alt=""/>
								</div>
								<div class="blog_txt">
									<div class="date_blog_">
										<a href="#"><i class='bx bxs-calendar'></i>OCT 08,2023</a>
										<a href="#"><i class='bx bxs-user'></i>Admin</a>
									</div>
									<h2>PRESERVE YOUR RIDE: FA…</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}