import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "react-datepicker/dist/react-datepicker.css";

function NewAllergy() {

    return (
        <div class="container">
            <div class="row my-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New Allergy</Form.Label>
                        <Form.Control type="Allergy" placeholder="Enter allergy name" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
  );
}

export default NewAllergy;