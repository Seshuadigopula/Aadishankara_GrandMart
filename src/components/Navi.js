import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Navbar, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    Form, 
    Input, 
    Button, 
    Collapse,
    NavbarToggler
} from 'reactstrap'; 

function Navi({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value); // Pass the search term to the parent component
  };

  return (
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="brand" href="/">
            <img src="/Images/logo.png" alt="Aadhi Shankara Grand Mart" style={{ width: '150px' }} />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
              <NavItem><Link to="/products" className="nav-link">Products</Link></NavItem>
              <NavItem><Link to="/offers" className="nav-link">Offers</Link></NavItem>
            </Nav>
            <Form inline className="form-inline">
              <Input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={handleSearchChange}
                className="form-control"
              />
              <Button color="primary" className="btn-primary">Search</Button>
            </Form>
          </Collapse>
        </Navbar>
    </div>
  );
}

export default Navi;
