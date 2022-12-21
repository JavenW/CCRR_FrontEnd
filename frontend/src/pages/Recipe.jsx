import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Receipe() {
    const recipes = ['a', 'b', 'c', 'd']
    return (        
        <div className="recipe">
          <div class="container">
            <div class="row align-items-center my-5">
                <h1 class="font-weight-light">All receipes</h1>
                {recipes.map(item => (
                <div class="col-lg-4">
                <Card style={{ width: '20rem', margin: '0.5rem' }}>
                  <Card.Img variant="top" src="omelette.jpeg" />
                  <Card.Body>
                    <Card.Title>{item}</Card.Title>
                    <Card.Text>
                    Ingredients: eggs, cheese
                    </Card.Text>
                  </Card.Body>
                <Card.Body>
                  <Card.Link href="#">Detailed instruction</Card.Link>
                </Card.Body>
              </Card>
              </div>
              ))}
            </div>
          </div>
        </div>
        
      );
  }
  
  export default Receipe;

