import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from "axios";

const ProductScreen = () => {
    const params = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get("/api/products/" + params.id);
            setProduct(data);
        }
        fetchProduct();
    }, [params]);
    return (
        <>
            <Link className="" to="/">
                <Button className="btn btn-light my-3">
                    Add To Cart
                </Button>
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} reviews={product.numReviews} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: £{product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price: <strong>£{product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {product.countInStock !== 0 ? 
                            <ListGroup.Item>
                                <Button className="btn-block" type="button">
                                    Add To Cart
                                </Button>
                            </ListGroup.Item> : null}
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen;