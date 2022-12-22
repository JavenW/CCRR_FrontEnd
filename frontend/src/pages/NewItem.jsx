import React, { useState } from "react";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function NewItem() {
    const [expdate, setExpDate] = useState(new Date());
    const [name, setName] = useState("");
    let user = JSON.parse(sessionStorage.getItem('userObject'))

    const handleAdd = event => {
        axios({
            method: "POST",
            url: "http://52.207.246.240:5011/additem",
            params: {
                email: user.email,
                item: name,
                expdate: Math.floor(expdate.getTime() / 1000)

            }
        }).then(() => {
            window.location.href = "/"
        })
            .catch((error) => {
                console.log("error");
                console.log(error);
                window.location.reload(false);
            })
    };



    return (
        <div className="container">
            <div className="row my-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Item name</Form.Label>
                        <Form.Control placeholder="Enter item name" value={name} onChange={event => {
                            setName(event.target.value)
                        }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Expiration Date</Form.Label>
                        <DatePicker selected={expdate} onChange={(date) => setExpDate(date)} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleAdd}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>

    );
}

export default NewItem;