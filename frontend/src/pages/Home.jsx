
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SimpleDateTime from 'react-simple-timestamp-to-date';

function Home() {
  let user = JSON.parse(sessionStorage.getItem('userObject'))

  const [items, setItems] = useState([]);


  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:5011/getitems/" + user.email
    }).then((response) => {
      setItems(response.data)
    })
      .catch((error) => {
        console.log("error");
        console.log(error);
      })

  }, []);

  const handleDelete = value => event => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5011/deleteitem",
      params: {
        email: user.email,
        item: value,

      }
    }).then((response) => {

    })
      .catch((error) => {
        console.log("error");
        console.log(error);
        // handleSignOut()
      })
    window.location.reload(false);
  };

  return (
    <div className="home">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h2>All Items</h2>
            <Table bordered>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Expiration Date</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(items).map((key) => {
                  return (
                    <tr>
                      <td>{key}</td>
                      <td>
                        <SimpleDateTime dateFormat="DMY" dateSeparator="/" showTime="0">{items[key]}</SimpleDateTime>
                        <Button href={"edititem?item=" + key} variant="primary" active>Edit</Button>{""}
                      </td>
                      <td><Button variant="danger" active onClick={handleDelete(key)}>Delete</Button>{""}</td>
                    </tr>
                  );
                })}
              </tbody>

            </Table>
            <Button href="newitem" variant="primary" active>Add new item</Button>{""}
          </div>
        </div>
      </div>
    </div >
  );
}


export default Home;