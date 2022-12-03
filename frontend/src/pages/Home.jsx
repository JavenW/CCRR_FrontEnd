import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Home() {
  var items = [{ "name": "tomatoes", "quantity": 2, "expiration_date": "02-Jan-2023" }, { "name": "egg", "quantity": 2, "expiration_date": "02-Jan-2023" }]
  var receipe = [{ "name": "omelette", "ingredients": ["egg", "chees"] }]
  return (
    <div className="home">
      <div class="container">
        <div class="row my-5">
          <div class="col-lg-6">
            <h2>All Items</h2>
            <Table bordered>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Expiration Date</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.expiration_date}</td>
                      <Button variant="danger" active>Delete</Button>{""}
                    </tr>
                  );
                })}
              </tbody>

            </Table>
            <Button href="newitem" variant="primary" active>Add new item</Button>{""}
          </div>

          <div class="col-lg-6">
            <h2>Receipe For You</h2>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Receipe Name</th>
                  <th>Ingredients</th>
                </tr>
              </thead>
              <tbody>
                {receipe.map(item => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>
                        {item.ingredients.map(ing => {
                          return (
                            <span>{ing} </span>
                          )
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div >
  );
}


export default Home;