import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
            <h1 class="font-weight-light">All receipes</h1>
            <div class="col-lg-6">
            <Card style={{ width: '20rem', margin: '0.5rem' }}>
              <Card.Img variant="top" src="omelette.jpeg" />
              <Card.Body>
                <Card.Title>Omelette</Card.Title>
                <Card.Text>
                Ingredients: eggs, cheese
                </Card.Text>
              </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>...</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Detailed instruction</Card.Link>
            </Card.Body>
          </Card>
          </div>
          <div class="col-lg-6">
          <Card style={{ width: '20rem', margin: '0.5rem' }}>
              <Card.Img variant="top" src="omelette.jpeg" />
              <Card.Body>
                <Card.Title>Receipe name2</Card.Title>
                <Card.Text>
                Ingredients: blabla...
                </Card.Text>
              </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>...</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Detailed instruction</Card.Link>
            </Card.Body>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;