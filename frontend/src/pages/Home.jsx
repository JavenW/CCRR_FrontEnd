
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import DeleteIcon from '@mui/icons-material/Delete';

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

  function highlightColor(date) {
    let dt = new Date(date)
    let currdate = new Date();
    if (dt < currdate) {
      return "red";
    } else if (dt < currdate.setDate(currdate.getDate() + 5)) {
      return "yellow";
    }
    return "white";
  }

  return (
    <div className="home">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-2"></div>
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
                    <tr style={{ backgroundColor: highlightColor(items[key]) }}>
                      <td>{key}</td>
                      <td>
                        <SimpleDateTime dateFormat="MDY" dateSeparator="/" showTime="0">{items[key]}</SimpleDateTime>
                        <span>&emsp;</span>
                        <Button href={"edititem?item=" + key} variant="outline-primary">Edit</Button>{""}
                      </td>
                      <td><DeleteIcon active onClick={handleDelete(key)}>Delete</DeleteIcon>{""}</td>
                    </tr>
                  );
                })}
              </tbody>

            </Table>
            <div>Note: red row is expired item, yellow row is the item expiring in 5 days</div>
            <Button href="newitem" variant="primary" active>Add new item</Button>{""}
          </div>
        </div>
      </div>
    </div >
  );
}


export default Home;