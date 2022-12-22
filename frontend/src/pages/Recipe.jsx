import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Receipe() {

    const [recipes, setRecipes] = useState(null);
    let user = JSON.parse(sessionStorage.getItem('userObject'))

    function getData() {
      axios({
        method: "GET",
        url:"http://127.0.0.1:5000/getrecipe/"+user.email,
      })
      .then((response) => {
        console.log(response.data)
        setRecipes(response.data)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })
    }

  useEffect(() => {
      getData()
  }, []);

  return (
    <div className="recipe">
      {/* new line start*/}
        {recipes && <div>
          <div class="container">
            <div class="row align-items-center my-5">
                <h1 class="font-weight-light">Recommened Receipes</h1>
                {recipes.map(item => (
                  <div class="col-lg-4">
                    <Card style={{ width: '20rem', margin: '0.5rem' }}>
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                      </Card.Body>
                    <Card.Body>
                      <Card.Link href={"/detaileddata" + item.id}>Detailed instruction</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        }
       {/* end of new line */}
  </div>
)
    
}
  
export default Receipe;
