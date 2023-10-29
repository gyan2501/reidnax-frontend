import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function TableData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch data
    axios
      .get("https://reidnax-n0nl.onrender.com/users")
      .then((response) => {
        setData(response.data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
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
            {data?.map((el) => (
              <TableRow key={el.id}>
                <TableCell>{el.id}</TableCell>
                <TableCell>{el.firstName}</TableCell>
                <TableCell>{el.lastName}</TableCell>
                <TableCell>{el.gender}</TableCell>
                <TableCell>{el.age}</TableCell>
                <TableCell>{el.height}</TableCell>
                <TableCell>{el.weight}</TableCell>
                <TableCell>{el.phone}</TableCell>
                <TableCell>{el.bloodGroup}</TableCell>
                <TableCell>{el.birthDate}</TableCell>
                <TableCell>{el.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </React.Fragment>
  );
}
