import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import jar from "assets/images/basepaint.png";
import { Link } from "react-router-dom";
import ColorForm from "component/ColorForm";
import MatchingColor from "component/MatchingColor";

export default function ShopPage() {
  return (
    <>
    <div className="cc-color">
        <Container>
          <Row>
            <Col md={3}>
              <div className="f-by">
                <div className="fb-box">
                  <h5>Filter by Vehicle</h5>
                  <Form>
                  <Form.Select aria-label="Default select example">
                    <option>Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>

                  <Form.Select aria-label="Default select example">
                    <option>Make</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>

                  <Form.Select aria-label="Default select example">
                    <option>Model</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>

                  <Button variant="primary" type="submit">
                    Filter
                  </Button>
                  </Form>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <div className="cc-area">
                <Row>
                  <Col md={4}>
                    <div className="cc-box">
                      <div className="cc-main">
                        <div className="cc-area"></div>
                        <div className="cc-detail">
                          <div className="color-name">
                            <h4>Color Name</h4>
                          </div>
                          <div className="color-code">
                            <strong>Color Code:</strong>
                            <p>NH-700M</p>
                          </div>
                          <div className="img-jar">
                            <img src={jar} alt="img" />
                          </div>
                        </div>
                      </div>
                      <Link to={"/"}>Select Size</Link>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="cc-box">
                      <div className="cc-main">
                        <div className="cc-area"></div>
                        <div className="cc-detail">
                          <div className="color-name">
                            <h4>Color Name</h4>
                          </div>
                          <div className="color-code">
                            <strong>Color Code:</strong>
                            <p>NH-700M</p>
                          </div>
                          <div className="img-jar">
                            <img src={jar} alt="img" />
                          </div>
                        </div>
                      </div>
                      <Link to={"/"}>Select Size</Link>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="cc-box">
                      <div className="cc-main">
                        <div className="cc-area"></div>
                        <div className="cc-detail">
                          <div className="color-name">
                            <h4>Color Name</h4>
                          </div>
                          <div className="color-code">
                            <strong>Color Code:</strong>
                            <p>NH-700M</p>
                          </div>
                          <div className="img-jar">
                            <img src={jar} alt="img" />
                          </div>
                        </div>
                      </div>
                      <Link to={"/"}>Select Size</Link>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="cc-box">
                      <div className="cc-main">
                        <div className="cc-area"></div>
                        <div className="cc-detail">
                          <div className="color-name">
                            <h4>Color Name</h4>
                          </div>
                          <div className="color-code">
                            <strong>Color Code:</strong>
                            <p>NH-700M</p>
                          </div>
                          <div className="img-jar">
                            <img src={jar} alt="img" />
                          </div>
                        </div>
                      </div>
                      <Link to={"/"}>Select Size</Link>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="cc-box">
                      <div className="cc-main">
                        <div className="cc-area"></div>
                        <div className="cc-detail">
                          <div className="color-name">
                            <h4>Color Name</h4>
                          </div>
                          <div className="color-code">
                            <strong>Color Code:</strong>
                            <p>NH-700M</p>
                          </div>
                          <div className="img-jar">
                            <img src={jar} alt="img" />
                          </div>
                        </div>
                      </div>
                      <Link to={"/"}>Select Size</Link>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="cc-box">
                      <div className="cc-main">
                        <div className="cc-area"></div>
                        <div className="cc-detail">
                          <div className="color-name">
                            <h4>Color Name</h4>
                          </div>
                          <div className="color-code">
                            <strong>Color Code:</strong>
                            <p>NH-700M</p>
                          </div>
                          <div className="img-jar">
                            <img src={jar} alt="img" />
                          </div>
                        </div>
                      </div>
                      <Link to={"/"}>Select Size</Link>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="cc-box">
                      <div className="cc-main">
                        <div className="cc-area"></div>
                        <div className="cc-detail">
                          <div className="color-name">
                            <h4>Color Name</h4>
                          </div>
                          <div className="color-code">
                            <strong>Color Code:</strong>
                            <p>NH-700M</p>
                          </div>
                          <div className="img-jar">
                            <img src={jar} alt="img" />
                          </div>
                        </div>
                      </div>
                      <Link to={"/"}>Select Size</Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
