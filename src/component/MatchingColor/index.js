import React from "react";
import MatchingImage from "assets/images/Color-Matching.webp";

export default function MatchingColor() {
  return (
    <>
      <section class="about_sec custom_color_pg ">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="about_txt">
                <h3>Custom Color</h3>
                <h2>Matching Services</h2>
                <p>
                  MyPerfectColor specializes in exact match paint color
                  solutions. We have matched thousands of colors for our
                  customers who range from homeowners all the way up to some of
                  the world’s leading brands like Boeing, Tiffany & Co., Kohler,
                  and the US Navy.
                </p>
                <p>
                  We have a database of over 250,000 colors that have been
                  previously matched, but for those customers who have a unique
                  product, color or material that they need to be converted into
                  the perfect paint color (or who need a sheen/finish matched on
                  a known color), we also offer a variety of Custom Color
                  Matching Services.
                </p>
                <p>
                  In these cases, we will often need you to send us a sample
                  (either a part, chip or other object). Once received, our
                  expert team will match the color and finish2 of your product
                  to your specifications, and mix and ship the perfectly matched
                  paint directly to you.
                </p>
                <h3>The Cost of Quality Color Matching</h3>
                <p>
                  Custom Color Matching incurs a one-time fee. Once your color
                  is in our database, that color will have its own dedicated web
                  page where you can reorder at any time without sending samples
                  or repaying the matching fee. This fee generally starts at
                  $175, but some specialty match situations can cost $400 or
                  more. Note that we generally waive Matching Fees when paint
                  purchases exceed a certain threshold.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about_img">
                <img src={MatchingImage} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="ct_tblemain mt-5 ">
              <div class="d-none d-md-block">
                <table class="table">
                  <tbody>
                    <tr>
                      <th class="thead-light">Free</th>
                      <th>Custom and Precision Touch Up</th>
                      <th>Specialty Matches</th>
                    </tr>
                    <tr>
                      <td>
                        Chose any existing color from our{" "}
                        <a href="#">250,000+ color database</a>, including
                        reorders. <sup>1</sup>
                      </td>
                      <td>
                        For touch up applications where precision is critical or
                        when acrylic enamel paint is required. <sup>2</sup>
                      </td>
                      <td>
                        When matching unusual colors like metallics,
                        fluorescents, pearlescents, dyes and stains.{" "}
                        <sup>3</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          MyPerfectColor matches paint colors from major paint
                          companies and color standards such as Benjamin Moore,
                          Sherwin Williams, Behr Pantone, RAL, Federal
                          Standards, and others.
                        </p>
                        <p>
                          The available sheens will be based on the standard
                          sheens available in the paint type you would like.
                        </p>
                      </td>
                      <td>
                        <p>
                          Our expert team will match the color and finish of
                          your product, equipment or fixtures to your
                          specifications, and provide this perfectly matched
                          paint in whatever type of paint you need, and in
                          whatever size you need.
                        </p>
                      </td>
                      <td>
                        <p>
                          Some finishes are extraordinarily difficult to match
                          and require extra time and more expensive materials.
                        </p>
                        <p>
                          Our Specialty Matching Service incorporates the same
                          level of expertise as in our Touch Up Grade Service
                          and includes metallics, fluorescents, pearlescents,
                          dyes and stains.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Free</strong>
                      </td>
                      <td>
                        <strong>$175</strong>
                      </td>
                      <td>
                        <strong>
                          $200-$400+ <sup>4</sup>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="theme_para">
                For more information on what drives the cost of matching
                samples, please see the section below.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
