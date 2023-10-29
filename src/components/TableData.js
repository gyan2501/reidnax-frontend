import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TableData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API request to fetch data
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        setData(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }, []);

  return (
    <React.Fragment>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Age</TableCell>

            <TableCell>Height(cm)</TableCell>
            <TableCell>Weight</TableCell>

            <TableCell>Phone No</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>BirthDate</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.age}</TableCell>
               <TableCell>{user.height}</TableCell>
               <TableCell>{user.weight}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.bloodGroup}</TableCell>
              <TableCell>{user.birthDate}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
