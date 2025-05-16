// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { data } from "./data.js";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  // console.log(search);

  

  return (
    <>
      <div className="app">
        <Container>
          <h1 className="text-center my-4">Profile Keeper</h1>
          <Form>
            <InputGroup
              className="my-4"
              onChange={(e) => setSearch(e.target.value)}
            >
              <Form.Control placeholder="Search Profile" />
            </InputGroup>
          </Form>
          <Table striped hover bordered>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.firstname.toLowerCase().includes(search);
                })
                .map((item, id) => (
                  <tr key={id}>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default App;

//  <tr>
//                 <td>Vaishnavi</td>
//                 <td>Karanam</td>
//                 <td>290984080</td>
//                 <td>vaishnavi@gmail.com</td>
//               </tr>
