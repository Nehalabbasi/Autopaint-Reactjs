import React, { useEffect, useState } from "react";
import ShopGrid from "component/ProductGrid";
import ProImage01 from "assets/images/product/pro01.png";
import ProImage02 from "assets/images/product/pro02.png";
import ProImage03 from "assets/images/product/pro03.png";
import ProImage04 from "assets/images/product/pro04.png";
import ProImage05 from "assets/images/product/pro05.png";
import ProImage06 from "assets/images/product/pro06.png";
import ProImage07 from "assets/images/product/pro07.png";
import { Link } from "react-router-dom";
export default function ShopPage() {
  const [howto, setHowto] = useState([]);
  const [product, setProduct] = useState([]);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(sessionStorage.getItem("token")).data.token,
      },
    };
    fetch(`${BASE_URL}/category/homepage`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setHowto(response.data);
        console.log(response.data);
      });
  }, []);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(sessionStorage.getItem("token")).data.token,
      },
    };
    fetch(`${BASE_URL}/product/list`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response.products.products);
        console.log(response.products);
      });
  }, []);
  return (
    <>
      <section class="prodct_pg_sec">
        <div class="container">
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-3">
              <div class="categorie_main">
                <ul>
                  <li>
                    <a href="#">
                      <i class="bx bx-menu-alt-left"></i>All Categories
                    </a>
                  </li>
                  {howto.map((mess) => (
                    <li>
                      <label class="check-container">
                        {mess.productcatname}
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="product_filter">
                <h2>All Products</h2>
                <div class="filter_select">
                  <div class="div">
                    <label>Brands</label>
                    <select>
                      <option value="">All Brands</option>
                      <option value="">All Brands</option>
                      <option value="">All Brands</option>
                    </select>
                  </div>
                  <div class="div">
                    <label>Sorts By</label>
                    <select>
                      <option value="">Newest</option>
                      <option value="">Oldest</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row ">
                {product.map((mess) => (
                  
                  <div class="col-lg-4">
                    <Link to="/productdetail">
                    <div class="product_main">
                      <div class="product_image">
                        <img src={ProImage01} alt="" />
                      </div>
                      <div class="product_text">
                        <div class="title_price">
                          <h4>{mess.productname}</h4>
                          <div>
                            {/* <del>1500.00</del> */}
                            <h5>{mess.startingprice}</h5>
                          </div>
                        </div>
                        <p>{mess.productdescription} </p>
                        <ul>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}

                {/*   <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage02} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage03} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage04} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage05} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage06} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage06} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage07} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage01} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage02} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage03} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="product_main">
                    <div class="product_image">
                      <img src={ProImage05} alt="" />
                    </div>
                    <div class="product_text">
                      <div class="title_price">
                        <h4>lorem Ipsum</h4>
                        <div>
                          <del>1500.00</del>
                          <h5>$123.00</h5>
                        </div>
                      </div>
                      <p>Cpisicing elit, sed do </p>
                      <ul>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                        <li>
                          <i class="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div class="d-flex justify-content-end">
                  <ul class="navigation_product">
                    <li>
                      <i class="bx bx-chevron-left"></i>
                    </li>
                    <li>
                      <a href="#" class="ct-active">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">....</a>
                    </li>
                    <li>
                      <a href="#">10</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
