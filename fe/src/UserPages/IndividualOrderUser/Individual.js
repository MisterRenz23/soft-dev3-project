import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import API from "../../API";
import "./Individual.css";
const Individual = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await API.get("user/product_list/");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col>
              <Card style={{ width: "30rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title> {product.title} </Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Link to={`/services-user/individual-order/${product.id}`}>
                    <Button variant="primary">Order Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Individual;
