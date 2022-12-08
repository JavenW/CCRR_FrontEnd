import React from "react";

import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

function UserProfile() {
    var items = [{ "allergy": "egg"},{"allergy": "milk"}];
  return (
      <div className="col-lg-6">
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
      </div>
  );
}

export default UserProfile;