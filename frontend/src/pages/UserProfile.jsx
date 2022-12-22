import React, {useEffect, useState} from "react";

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
import axios from "axios";

function UserProfile() {
  // var items = [{ "allergy": "egg" }, { "allergy": "milk" },{ "allergy": "egg" }, { "allergy": "milk" },{ "allergy": "egg" }, { "allergy": "milk" }];
  let user = JSON.parse(sessionStorage.getItem('userObject'))
  const [allergy, setAllergy] = useState("");
  const [items, setItems] = useState([]);
  const handleAdd =  event => {
      //event.preventDefault();
      console.log(allergy)

    axios({
        method: "POST",
        url: "https://ccrruserbackendapplication-env.eba-dairev2g.us-east-1.elasticbeanstalk.com/addallergy",
        params: {
          token: user.token,
          userid: user.userid,
          allergy: allergy
        }
      }).then((response)=>{
          //setItems([])
          //console.log("correct")
          //console.log(response.data);
      })
      .catch((error) => {
          console.log("error");
          console.log(error);
          // handleSignOut()
      })
    window.location.reload(false);
    console.info('You clicked the add icon.');
  };


  const handleDelete = value => event => {
      //event.preventDefault();
      console.log(value)
      /*axios.delete(`https://ccrruserbackendapplication-env.eba-dairev2g.us-east-1.elasticbeanstalk.com/deleteallergy${user.userid, user.token, allergy}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })*/
    axios({
        method: "POST",
        url: "https://ccrruserbackendapplication-env.eba-dairev2g.us-east-1.elasticbeanstalk.com/deleteallergy",
        params: {
          token: user.token,
          userid: user.userid,
          allergy: value
        }
      }).then((response)=>{
          //setItems([])
          //console.log("correct")
          //console.log(response.data);
      })
      .catch((error) => {
          console.log("error");
          console.log(error);
          // handleSignOut()
      })
    window.location.reload(false);
    console.info('You clicked the delete icon.');
  };
  useEffect(() => {
      var bodyFormData = new FormData();
      bodyFormData.append('token', user.token);
      bodyFormData.append('userid', user.userid);
      axios({
        method: "GET",
        url: "https://ccrruserbackendapplication-env.eba-dairev2g.us-east-1.elasticbeanstalk.com/getallergy",
        params: {
          token: user.token,
            userid: user.userid
        }
      }).then((response)=>{
          setItems(response.data)
          //console.log("correct")
          //console.log(response.data);
      })
      .catch((error) => {
          console.log("error");
          console.log(error);
      })

    },[]);

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
                  src={user.pict}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px', marginTop: "20px" }}
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
                        <MDBCardText>Allergy</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="5">
                        {
                          items.map(item => {
                          return (
                            <Chip
                              label={item}
                              onDelete={handleDelete(item)}
                            />
                          );
                        })}
                      </MDBCol>
                      <MDBCol sm="4">
                        <input type={"text"} placeholder={'allergy name'} value={allergy} onChange={
                          event => {
                            setAllergy(event.target.value)
                          }
                        }/>
                        <MDBBtn size="sm" onClick={handleAdd}>Add</MDBBtn>
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