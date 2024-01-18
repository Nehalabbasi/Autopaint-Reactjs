import React from "react";
import MainBanner from "component/MainBanner";
import ProjectSize from "component/ProjectSize";
import About from "component/About";
import CustomColor from "component/CustomColor";
import Testimonial from "component/Testimonials";
import Blogs from "component/Blog";

export default function HomePage() {
  return (
    <>
      <MainBanner />
      <ProjectSize />
      <About />
      <CustomColor />
      <Testimonial />
      <Blogs />
    </>
  );
}
