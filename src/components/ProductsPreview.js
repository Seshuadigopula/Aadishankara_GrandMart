import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css'; 

function ProductsPreview({ searchTerm }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('/products.json'); // Replace with your API endpoint
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ProductsPreview;
