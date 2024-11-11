import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button,Container, Row } from 'reactstrap';

const ComboOffers = () => {
  return (
    <div className="d-flex flex-wrap">
      <Container>
        <Row>
      <Card style={{ width: '18rem' }}>
        <CardImg top src="/Images/image1.jpg" alt="Combo Offer" />
        <CardBody>
          <CardTitle>Combo Offer 1</CardTitle>
          <Button color="secondary">View Offer</Button>
        </CardBody>
      </Card>
      <Card style={{ width: '18rem' }}>
        <CardImg top src="/Images/image2.jpg" alt="Combo Offer" />
        <CardBody>
          <CardTitle>Combo Offer 1</CardTitle>
          <Button color="secondary">View Offer</Button>
        </CardBody>
      </Card>
      <Card style={{ width: '18rem' }}>
        <CardImg top src="/Images/images3.jpg" alt="Combo Offer" />
        <CardBody>
          <CardTitle>Combo Offer 1</CardTitle>
          <Button color="secondary">View Offer</Button>
        </CardBody>
      </Card>
      {/* Repeat similar cards for other combo offers */}
        </Row>
      </Container>
    </div>
  );
};

export default ComboOffers;
