
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
      url: "http://52.207.246.240:5011/getitems/" + user.email
    }).then((response) => {
      setItems(response.data)
    })
      .catch((error) => {
        console.log("error");
        console.log(error);
      })

  }, []);

  function handleDelete(value) {
    axios({
      method: "POST",
      url: "http://52.207.246.240:5011/deleteitem",
      params: {
        email: user.email,
        item: value,

      }
    }).then((response) => {
      console.log("delete success")
      console.log(response)
      window.location.reload(false);
    })
      .catch((error) => {
        console.log("error");
        console.log(error);
      })
  };

  function highlightColor(date) {
    let dt = new Date(parseInt(date) * 1000)
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
                      <td><DeleteIcon active onClick={() => handleDelete(key)}>{""}</DeleteIcon></td>
                    </tr>
                  );
                })}
              </tbody>

            </Table>
            <div>Note: red row is expired item, yellow row is the item expiring in 5 days.</div>
            <p></p>
            <Button href="newitem" variant="primary" active>Add new item</Button>{""}
          </div>
        </div>
      </div>
    </div >
  );
}


export default Home;