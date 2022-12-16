import React from "react";

import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Chip from "@mui/material/Chip";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function UserProfile() {
  var items = [{ "allergy": "egg" }, { "allergy": "milk" }];
  let user = JSON.parse(sessionStorage.getItem('userObject'))

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <section style={{ marginTop: "150px" }}>
      <MDBContainer className="py-5" >
        <MDBRow>
          <MDBCol lg="2">
          </MDBCol>
          <MDBCol lg="8">
            <MDBRow>
              <MDBCol lg="3">
                <MDBCardImage
                  src={user.picture}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px', marginTop: "60px" }}
                  fluid />
              </MDBCol>
              <MDBCol lg="9">
                <MDBCard className="mb-4">
                  <MDBCardBody >
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.name}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.email}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="5">
                        <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="4">
                        <MDBBtn size="sm">Edit</MDBBtn>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Allergy</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="5">
                        {items.map(item => {
                          return (
                            <Chip
                              label={item.allergy}
                              onDelete={handleDelete}
                            />
                          );
                        })}
                      </MDBCol>
                      <MDBCol sm="4">
                        <MDBBtn size="sm">Add</MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>

          </MDBCol>
        </MDBRow>
      </MDBContainer>







      {/* <div className="col-lg-6">
        <h2>Yanyi Huo</h2>
        <Table bordered>
          <thead>
            <tr>
              <th>Allergy</th>

            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.allergy}</td>
                  <Button variant="danger" active>Delete</Button>{""}
                </tr>
              );
            })}
          </tbody>

        </Table>
        <Button href="newallergy" variant="primary" active>Add new allergy</Button>{""}
      </div> */}

    </section>
  );
}

export default UserProfile;