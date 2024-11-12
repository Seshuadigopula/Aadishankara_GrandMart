import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

function Products({ searchTerm }) {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch('/products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        <p>{cartItems} is added</p>
      };
    return (
        <div>
            <div className="preview">
                <h2>Our Products</h2>
            </div>
            <Container>
                <Row>
                    {filteredProducts.map((product) => (
                        <Col md="4" key={product.id}>
                            <div className="card mb-4">
                                <img src={product.image_path} alt={product.name} className="card-image" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">₹{product.price}</p>
                                    <p className="card-text">{product.description}</p>
                                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Products;
