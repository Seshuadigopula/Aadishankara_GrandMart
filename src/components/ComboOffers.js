import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button,Container, Row } from 'reactstrap';

const ComboOffers = () => {
  return (
    <div className="d-flex flex-wrap">
      <Container>
      <h2 style={{textAlign:'left'}}>Offers</h2>
        <Row>
      <Card style={{ width: '18rem' }}>
        <CardImg top src="/Images/image1.webp" alt="Combo Offer" />
        <CardBody>
          <CardTitle>Combo Offer 1</CardTitle>
          <Button color="secondary">View Offer</Button>
        </CardBody>
      </Card>
      <Card style={{ width: '18rem' }}>
        <CardImg top src="/Images/image2.jpg" alt="Combo Offer" />
        <CardBody>
          <CardTitle>Combo Offer 2</CardTitle>
          <Button color="secondary">View Offer</Button>
        </CardBody>
      </Card>
      <Card style={{ width: '18rem' }}>
        <CardImg top src="/Images/image3.jpg" alt="Combo Offer" />
        <CardBody>
          <CardTitle>Combo Offer 3</CardTitle>
          <Button color="secondary">View Offer</Button>
        </CardBody>
      </Card>
      <Card style={{ width: '18rem' }}>
        <CardImg top src="/Images/image4.jpg" alt="Combo Offer" />
        <CardBody>
          <CardTitle>Combo Offer 4</CardTitle>
          <Button color="secondary">View Offer</Button>
        </CardBody>
      </Card>
        </Row>
        <Row>
        <Card style={{ width: '18rem' }}>
        <CardImg top src="/Images/image5.webp" alt="Combo Offer" />
        <CardBody>
          <CardTitle>Combo Offer 5</CardTitle>
          <Button color="secondary">View Offer</Button>
        </CardBody>
        </Card>
        </Row>
      </Container>
    </div>
  );
};

export default ComboOffers;
